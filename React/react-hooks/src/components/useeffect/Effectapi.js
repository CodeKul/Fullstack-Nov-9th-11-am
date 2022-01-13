import React, { useState, useEffect } from 'react'

export default function Effectapi() {

    const [data, setData] = useState([])

    let promiseObj = new Promise((resolve, reject) => {
        // resolve("Hi, Promise resolved")
        resolve("Not capable")
    })

    promiseObj.then(() => {
        console.log("Promise Fulfilled")
    })
        .catch(() => {
            console.log("Promise Rejected")
        })

    console.log(promiseObj)

    useEffect(() => {
        console.log("Data fetching")
        fetch("https://api.edamam.com/api/recipes/v2?type=public&q=eggs&app_id=3a6bab34&app_key=cf6ebfdcf5cbd02bde7f24df44ae3c41").then((response) => {
            console.log(response)
            let result = response.json()
            console.log(result)
            return result
        }).then((xyz) => {
            console.log(xyz)

            // setData(result)
            return xyz;

        }).then((abc) => {
            console.log(abc.hits)
            setData(abc.hits)
            console.log(data)
        })
    }, [data])


    return (
        <div>


            {data.map((item) => {
                // console.log(item)
                return (
                    <>
                        <h1>Name:{item.recipe.label} </h1>
                        <img src={item.recipe.image} />
                        <h3>{item.recipe.ingredients.map((step) => {
                            return (
                                <p>{step}</p>
                            )
                        })}</h3>

                        {/* <h3>Address: {item.address.street}, {item.address.city} </h3> */}
                    </>
                )


            })}


        </div>
    )
}
