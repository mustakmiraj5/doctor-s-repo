import Service from '../Service/Service';
import { format } from 'date-fns';

const Services = ({selected, slots}) => {
    
    return (
        <div className='content-center'>
            <h2 className='text-primary text-2xl text-center my-12'>Available services on {format(selected, 'PPP')}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    slots.map(slot => <Service key={slot._id} slot={slot}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;