import { FlatList } from "react-native"
import RouteCard from "../routeCard/RouteCard"

export default function RouteCarousel() {
    const cards = [
        // {id: '1', variant: 'active'},
        // {id: '2', variant: 'active'},
        // {id: '3', variant: 'next'},
        {
      id: '1',
      variant: 'default',
      title: 'Rodoviária → UFC',
      bus: 'Ônibus A',
      time: '12:50',
      completedStops: 2,
      stops: ['Rodoviária', 'Anexo', 'Constructec', 'Combate', 'UFC'],
      status: 'active',
    },
    {
      id: '2',
      variant: 'default',
      title: 'UFC → Rodoviária',
      bus: 'Ônibus B',
      time: '13:10',
      completedStops: 0,
      stops: ['UFC', 'Lagoa', 'Geladão', 'Rodoviária'],
        status: 'active',
    },
    {
      id: '3',
      variant: 'next',
      title: 'Rodoviária → UFC',
      bus: 'Ônibus B',
      time: '13:40',
      completedStops: -1,
      stops: ['Rodoviária', 'Anexo', 'Constructec', 'Combate', 'UFC'],
        status: 'next',
    },
    ]

    return (
        <FlatList
            horizontal
            data={cards}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <RouteCard 
                    variant={item.variant}
                    status={item.status}
                    title={item.title}
                    bus={item.bus}
                    time={item.time}
                    completedStops={item.completedStops}
                    stops={item.stops}
                    
                />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: '10%'}}
        />
    )
}