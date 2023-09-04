import { Tiers } from '@/app/api/rank/route'
import EmblemBronze from '@/assets/emblem/emblem-bronze.png'
import EmblemChallenger from '@/assets/emblem/emblem-challenger.png'
import EmblemDiamond from '@/assets/emblem/emblem-diamond.png'
import EmblemGold from '@/assets/emblem/emblem-gold.png'
import EmblemGrandmaster from '@/assets/emblem/emblem-grandmaster.png'
import EmblemIron from '@/assets/emblem/emblem-iron.png'
import EmblemMaster from '@/assets/emblem/emblem-master.png'
import EmblemPlatinum from '@/assets/emblem/emblem-platinum.png'
import EmblemSilver from '@/assets/emblem/emblem-silver.png'

export function getEmblem(tier: Tiers | ''){
    const emblems = {
        BRONZE: EmblemBronze,
        CHALLENGER: EmblemChallenger,
        DIAMOND: EmblemDiamond,
        GOLD: EmblemGold,
        GRANDMASTER: EmblemGrandmaster,
        IRON: EmblemIron,
        MASTER: EmblemMaster,
        PLATINUM: EmblemPlatinum,
        SILVER: EmblemSilver,
        '': EmblemSilver,
    }
    return emblems[tier]
}