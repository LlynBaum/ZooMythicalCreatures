import pegasus from '@/public/img/pegasus.png'
import phoenix from '@/public/img/phoenix.png'
import medusa from '@/public/img/medusa.png'
import { StaticImageData } from 'next/image';

interface Category{
    category: string
    img: StaticImageData
    bgPos: React.CSSProperties
}

const categories : Category[] = [{
        category : "Luft",
        img : pegasus,
        bgPos : {objectPosition : "center 30%"}
    },
    {
        category : "Feuer",
        img : phoenix,
        bgPos : {objectPosition : "center 30%"}
    },
    {
        category : "Monster",
        img: medusa,
        bgPos : {objectPosition : "center 40%"}
    }
];

export default categories;