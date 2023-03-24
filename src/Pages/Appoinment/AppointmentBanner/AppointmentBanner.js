import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selected, setSelected}) => {
    return (
        <div className="hero p-4 lg:relative my-2.5">
            <img src={chair} alt='' className='hidden lg:block customBgImage'></img>
            <div className="hero-content lg:absolute flex-col lg:flex-row-reverse lg:mx-9">
                <img alt='' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div className='lg:mr-20'>
                    <DayPicker
                    mode='single'
                    selected={selected}
                    onSelect={setSelected}
                     />
                    <p>You picked {format(selected, 'PPP')}.</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;