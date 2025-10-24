const [data, setData] = useState([])
setData([])


// selectors 
export const selectData = (store) => store.vacancies


//reducer
export const vacanciesReducer = (state, action) => {
    if (action.type === 'SET_DATA') {
        return [
            ...data,
            action.payload
        ]
    }
}


// action
const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data
    }
}

// использование action'a
const dispatch = useDispatch();
dispatchs(setData([]))