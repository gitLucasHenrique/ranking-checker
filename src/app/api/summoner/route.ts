import { NextRequest } from "next/server"

export interface SummonerDetails {
    id: string
    accountId: string
    puuid: string
    name: string
    profileIconId: number
    revisionDate: number
    summonerLevel: number
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const summonerName = searchParams.get('summonerName')
    
    const baseUrl = process.env.LOL_SUMMONER
    const apiKey = process.env.RIOT_KEY
    if ( baseUrl === undefined || apiKey === undefined ) {
        return undefined
    }

    const headers = new Headers()
    const url = baseUrl + `/${summonerName}`
    headers.append('X-Riot-Token', apiKey)
    const response = await fetch(url, {
        headers
    })
    const data = await response.json()

    return new Response(JSON.stringify(data), {
        status: 200
    })
}