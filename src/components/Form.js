import { useEffect, useState } from 'react';
import { useFetch } from '../CustomHooks/useFetch';
import { useForm } from '../CustomHooks/useForm';

const Form = ({setError, setData, setLabels}) => {

    // create a date object for today and the date for 10 days before that
    let today = new Date();
    let tenDaysBefore = new Date();
    tenDaysBefore.setDate(tenDaysBefore.getDate() - 10);

    let initialStartDate = `${today.getFullYear()}-${(today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)}-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`;
    let initialEndDate = `${tenDaysBefore.getFullYear()}-${(tenDaysBefore.getMonth() + 1) < 10 ? '0' + (tenDaysBefore.getMonth() + 1) : (tenDaysBefore.getMonth() + 1)}-${tenDaysBefore.getDate() < 10 ? '0' + tenDaysBefore.getDate() : tenDaysBefore.getDate()}`;

    const [startDate, setStartDate] = useState(initialEndDate);
    const [endDate, setEndDate] = useState(initialStartDate);

    // custom form hook for handling the dates update
    const [values, handleChange] = useForm({ startDate: startDate, endDate: endDate });

    // custom hook for fetching the data upon date change
    let unformedData = useFetch(startDate, endDate);

    useEffect(() => {
        if (unformedData != null) {
            setLabels(Object.keys(unformedData));
            setData(Object.values(unformedData));
        }
    }, [unformedData]);

    // function for updating the fetch dependencies
    const handleUpate = () => {
        if (values.endDate < values.startDate) {
            setError(true)
            setTimeout(() => {
                setError(false);
            }, 4000);
        }
        else {
            setStartDate(values.startDate);
            setEndDate(values.endDate);
        }
    }

    return (
        <div className="formContainer">
            <input type="date" name='startDate' onChange={handleChange} value={values.startDate} />
            <input type="date" name='endDate' onChange={handleChange} value={values.endDate} />
            <button onClick={() => handleUpate()}>Render</button>
        </div>
    )
}

export default Form;