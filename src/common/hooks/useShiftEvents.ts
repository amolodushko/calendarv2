const shifts = [
  {
    resourceId: 'c',
    title: 'event 3',
    start: Date.now() - 43434343,
    end: Date.now() + 4343434,
    type: 'shift',
    display: 'background',
    color: 'transparent',
  },
  {
    resourceId: 'd',
    title: 'event 333',
    start: Date.now() - 43434343,
    end: Date.now() + 4343434,
    type: 'shift',
    display: 'background',
    color: 'transparent',
  },
  {
    resourceId: 'e',
    title: 'event e',
    start: Date.now() - 43434343,
    end: Date.now() + 4343434,
    type: 'shift',
    display: 'background',
    color: 'transparent',
  },
];

const useShiftEvents = () => {
  // const [x, setX] = useState(0);
  //
  // useEffect(()=> {
  //   setTimeout(() => {
  //     setX(1);
  //     console.log('timeout')
  //   }, 5000)
  // }, []);

  return shifts;
};

export default useShiftEvents;
