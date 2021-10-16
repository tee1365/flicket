import { BoxProps, VStack } from '@chakra-ui/layout';
import { Event } from '../types';
import SingleEvent from './SingleEvent';

const fakeEvents: Event[] = [
  {
    event_id: 1,
    event_name: 'Switchable explicit functionalities',
    publisher: 'Quinu',
    event_date: '15/10/2021',
    event_time: '6:03 PM',
    price: 189,
    city: 'Tariji',
    venue: '88085 Lunder Hill',
    tickets_total: 859,
    tickets_available: 464,
  },
  {
    event_id: 2,
    event_name: 'Assimilated next generation task-force',
    publisher: 'Trudoo',
    event_date: '26/10/2021',
    event_time: '8:11 PM',
    price: 95,
    city: 'Xiaheqing',
    venue: '44 Kinsman Way',
    tickets_total: 2910,
    tickets_available: 2145,
  },
  {
    event_id: 3,
    event_name: 'Open-architected foreground paradigm',
    publisher: 'Thoughtmix',
    event_date: '20/12/2021',
    event_time: '7:54 PM',
    price: 149,
    city: 'Klishkivtsi',
    venue: '10 Dixon Point',
    tickets_total: 647,
    tickets_available: 27,
  },
  {
    event_id: 4,
    event_name: 'Distributed homogeneous neural-net',
    publisher: 'Realcube',
    event_date: '26/11/2021',
    event_time: '6:17 PM',
    price: 124,
    city: 'Youxi Chengguanzhen',
    venue: '6060 Manufacturers Center',
    tickets_total: 312,
    tickets_available: 268,
  },
  {
    event_id: 5,
    event_name: 'Down-sized real-time array',
    publisher: 'Kazu',
    event_date: '25/11/2021',
    event_time: '7:16 PM',
    price: 62,
    city: 'Andalan',
    venue: '09 Blackbird Street',
    tickets_total: 694,
    tickets_available: 254,
  },
];

interface EventListProps extends BoxProps {}

const EventList = ({ ...props }: EventListProps): JSX.Element => {
  return (
    <VStack spacing="4" w="50%" align="stretch" {...props}>
      {fakeEvents.map((event) => (
        <SingleEvent event={event} />
      ))}
    </VStack>
  );
};

export default EventList;
