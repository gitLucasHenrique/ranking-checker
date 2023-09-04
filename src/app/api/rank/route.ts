import { Ranks } from "@/pages"
import { NextRequest } from "next/server"

export enum Tiers {
    BRONZE = 'BRONZE',
    CHALLENGER = 'CHALLENGER',
    DIAMOND = 'DIAMOND',
    GOLD = 'GOLD',
    GRANDMASTER = 'GRANDMASTER',
    IRON = 'IRON',
    MASTER = 'MASTER',
    PLATINUM = 'PLATINUM',
    SILVER = 'SILVER',
}

export interface RankResponse {
    freshBlood: boolean
    hotStreak: boolean
    inactive: boolean
    leagueId: string
    leaguePoints: number
    losses: number
    queueType: string
    rank: string
    summonerId: string
    summonerName: string
    tier: Tiers
    veteran: boolean
    wins: number
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const summonerId = searchParams.get('summonerId') as string
    const rankType = searchParams.get('rankType') as Ranks
    const apiKey = process.env.RIOT_KEY
    const baseUrl = getBaseUrl(rankType)
    if ( apiKey === undefined || baseUrl === undefined ) {
        return undefined
    }

    const headers = new Headers()
    const url = baseUrl + `/${summonerId}`
    headers.append('X-Riot-Token', apiKey)
    const response = await fetch(url, {
        headers
    })
    const data = await response.json()

    return new Response(JSON.stringify(data), {
        status: 200
    })
}

function getBaseUrl(rankType: Ranks) {
    const baseUrl = {
        TFT: process.env.TFT_SUMMONER_INFO,
        SOLO: process.env.LOL_SUMMONER_INFO
    }
    return baseUrl[rankType]
}