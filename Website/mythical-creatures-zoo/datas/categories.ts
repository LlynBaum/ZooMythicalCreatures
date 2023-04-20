import pegasus from '@/public/img/pegasus.png'
import phoenix from '@/public/img/phoenix.png'
import medusa from '@/public/img/medusa.png'
import { StaticImageData } from 'next/image';

interface Data{
    category: string
    img: StaticImageData
    bgPos: React.CSSProperties
}

const categories : Data[] = [{
        "category" : "Air",
        "img" : pegasus,
        "bgPos" : {backgroundPosition : "center 30%"}

    },
    {
        "category" : "Fire",
        "img" : phoenix,
        "bgPos" : {backgroundPosition : "center 30%"}
    },
    {
        "category" : "Unheimliche",
        img: medusa,
        "bgPos" : {backgroundPosition : "center 40%"}
    }
];

export default categories;