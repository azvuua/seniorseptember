import React from "react";

export default function ApiPage() {
    const [data, setData] = React.useState([]);


    React.useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_END_URL +"/12c/students"
                );
                const json = await response.json();
                setData(json);
                console.log(json);
            } catch (error) {
                console.error("error fetching data:", error);
            }
        }

        fetchData();
    }, [])



    console.log(data);

    return <div>123</div>


}