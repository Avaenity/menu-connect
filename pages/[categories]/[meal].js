import { useRouter } from 'next/router'
import { useState } from "react";

import CardMealOrder from '../../components/CardMealOrder'
import Button from '../../components/Button'

export default function MealPage (props) {
    
    const [choices, setChoices] = useState([]);

    const router = useRouter()
    const categories = router.query.categories
  

    const infoItem = []
    props.categoriesFoods.map(function (el){
        if (Object.keys(el).toString() == categories){
            el[router.query.categories].map (function (itm){
                if (itm.id == router.query.meal){
                    infoItem.push(itm)
                }
            })
        }
    })
    
    //!important! to avoid fail static build, wecheck if router ready
    //https://flaviocopes.com/nextjs-dynamic-content/
    //watch https://github.com/vercel/next.js/issues/8259
    if (!categories) return <p></p>

    //Get meal composition
    const mealInfo = Object.keys(infoItem[0])
    .filter(key => !["info", "id", "nom", "prix"].includes(key))
    .reduce((obj, key) => {
        obj[key] = infoItem[0][key];
        return obj;
    }, {});

    //Get choices
    function onChange(clickedItem, clickedCategory) {
        console.log(clickedItem, clickedCategory)
    
        
    }

    return (
        <div className="main-content h-full relative">
            <div className="main-container h-full pt-16 px-10">
                <div className="hero">
                    <h1 className="text-xl text-center font-sans font-semibold font-thin pb-4 uppercase">{infoItem[0].nom}</h1>
                    <div className="info-bulle flex flex-row mt-4">
                        <div className="bulle relative mr-2">
                            <div className="w-4 h-4 rounded-full bg-gray-500 text-center relative">
                                <span className="absolute transform -translate-x-1/2 text-xs text-white font-semibold">i</span>
                            </div>
                        </div>
                        <ul>
                            <li className="text-tiny text-gray-600">Composez votre formule en tappant sur le plat choisi</li>
                        </ul>
                    </div>
                </div>
                <div className="category-content mt-4 overflow-scroll">
                    <form>
                    {
                        Object.keys(mealInfo).map(function(el,i){
                            return (
                                <div key={i}>
                                    <h2 className="category text-lg font-semibold mb-2 uppercase pt-2">{el}</h2>
                                    {
                                        mealInfo[el].split(',').map(function (item,index){
                                            //Get infoItem by ID
                                            const infoItem = props.allFoods.filter(function(itm){
                                                return itm.id == item;
                                            });

                                            return (
                                                <CardMealOrder name={el} key={index} infoItem={infoItem} onChange={() => onChange(infoItem[0].id, el)}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    </form>
                <Button />
                </div>
            </div>
            <style jsx>{`
                .hero{
                    position: relative;
                    height: 20%;
                    margin: 0 -20px;
                    padding: 20px;
                }
                .hero::after{
                    content:"";
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                    z-index: 30;
                    width: 100%;
                    height: 20px;
                    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
                }
                .category-content{
                    position: relative;
                    height: 80%;
                    margin: 0 -20px;
                    padding: 20px;
                }
                
            `}</style>
        </div>
    )
}