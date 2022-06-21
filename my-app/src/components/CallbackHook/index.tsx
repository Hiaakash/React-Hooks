import React,{useCallback, useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const CallbackHook = () => {
  const [age, setAge] = useState(21)
  const [salary, setSalary] = useState(5000)
  const incrementAge = useCallback(() => {
    setAge(age+1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary+1000)
  },[salary])
  return (
    <div>
      <Title/>
      <Count text ={"AGE"} value = {age} />
      <Button onClick={incrementAge}>Increment Age</Button>
      <Count text ={"SALARY"} value = {salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default CallbackHook
