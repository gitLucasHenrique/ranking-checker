import React, { useEffect, useState } from 'react';
import {
    Container,
    EndSection,
    FormContainer,
    GetDataButton,
    GitImage,
    GitImageContainer,
    Input,
    InputContainer,
    InputSection,
    MainContent,
    MidSection,
    PageWrapper,
    RankedType,
    RankedTypeContainer,
} from '@/pagesStyles/index.styles';
import Image from 'next/image';
import LeagueLogo from '@/assets/leagueLogo.png'
import GithubIcon from '@/assets/github.png'
import { SummonerDetails } from '@/app/api/summoner/route';
import { RankResponse, Tiers } from '@/app/api/rank/route';
import { getEmblem } from '@/utils/getEmblem';
import { Spinner } from '@/components/spinner/_index';
import Head from 'next/head';
import { EmptyContent } from '@/components/emptyContent/_index';

export enum Ranks {
    TFT = 'TFT',
    SOLO = 'SOLO'
}

export default function Index() {
    const [selectedRank, setSelectedRank] = useState<Ranks | ''>(Ranks.TFT)
    const [selectedSummoner, setSelectedSummoner] = useState('ThorMath')
    const [selectedSummonerTier, setSelectedSummonerTier] = useState<Tiers| ''>('')
    const [summonerId, setSummonerId] = useState<string | null>(null)
    const options = [Ranks.TFT, Ranks.SOLO]
    const [isLoading, setIsLoading] = useState(false)

    async function fetchSummonerInfo (e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        setIsLoading(true)
        const summonerResponse = await fetch(`/api/summoner?summonerName=${selectedSummoner}`)
        summonerResponse.json()
        .then((data: SummonerDetails) => {
            setSummonerId(data.id)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    
    function handleRankedTypeClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (selectedRank === e.currentTarget.value) {
            setSelectedRank('')
        } else {
            setSelectedRank(e.currentTarget.value as Ranks)
        }
    }

    function handleSummonerChange(e: React.FormEvent<HTMLInputElement>) {
        setSelectedSummoner(e.currentTarget.value)
    }

    useEffect(() => {
        async function fetchSummonerRankInfo () {
            if (selectedRank !== '' && summonerId !== null) {
                setIsLoading(true)
                const rankedDetails = await fetch(`/api/rank?summonerId=${summonerId}&rankType=${selectedRank}`)
                rankedDetails.json()
                .then((data: RankResponse[]) => {
                    setSelectedSummonerTier(data[data.length - 1].tier)
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }

        if (summonerId !== null) {
            const mins = 1
            const minsInMs = mins * 60 * 1000
            fetchSummonerRankInfo()
            
            const interval = setInterval(fetchSummonerRankInfo, minsInMs)
            return () => {
                clearInterval(interval);
              };
        }
    }, [selectedRank, summonerId])

    return (
        <PageWrapper>
            <Head>
                <title>LOL - Rank checker</title>
            </Head>
            <Container>
                <InputSection>
                    <Image
                        alt='logo'
                        src={LeagueLogo.src}
                        width={LeagueLogo.width}
                        height={LeagueLogo.height}
                        priority
                    />
                    <FormContainer>
                        <RankedTypeContainer>
                            {
                                options.map((option) => {
                                    return (
                                        <RankedType
                                            key={option}
                                            value={option}
                                            onClick={handleRankedTypeClick}
                                            selected={selectedRank === option}
                                        >
                                        {option}
                                        </RankedType>
                                    )
                                })
                            }
                        </RankedTypeContainer>
                        <InputContainer>
                            <Input type='text' placeholder='Summoner name' onChange={handleSummonerChange} value={selectedSummoner}/>
                        </InputContainer>
                        <GetDataButton
                            onClick={fetchSummonerInfo} 
                            disabled={(selectedRank === '' || selectedSummoner === '')}
                        >
                            Get data
                        </GetDataButton>
                    </FormContainer>
                </InputSection>
                <MidSection>
                    <MainContent>
                        {
                            (isLoading)
                            ?
                            <Spinner.Container>
                                <Spinner.Outside />
                                <Spinner.Inside />
                            </Spinner.Container>
                            : (selectedSummonerTier !== '')
                            ?
                            <Image
                                src={getEmblem(selectedSummonerTier).src}
                                alt='emblem image'
                                height={getEmblem(selectedSummonerTier).height}
                                width={getEmblem(selectedSummonerTier).width}
                                priority
                            />
                            :
                            <EmptyContent.Container>
                                <EmptyContent.Icon />
                                <EmptyContent.Message />
                            </EmptyContent.Container>
                        }
                    </MainContent>
                </MidSection>
                <EndSection>
                    <GitImageContainer>
                        <a href='https://github.com/gitLucasHenrique' target='_blank'>
                            <GitImage src={GithubIcon.src} alt='git icon'/>
                        </a>
                    </GitImageContainer>
                </EndSection>
            </Container>
        </PageWrapper>
    )
}