import { FlatList } from "react-native"
import RouteCard from "../routeCard/RouteCard"

export default function RouteCarousel() {
    const cards = [
        {id: '1', variant: 'active'},
        {id: '2', variant: 'active'},
        {id: '3', variant: 'next'},
    ]

    return (
        <FlatList
            horizontal
            data={cards}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <RouteCard variant={item.variant}/>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: '10%'}}
        />
    )
}