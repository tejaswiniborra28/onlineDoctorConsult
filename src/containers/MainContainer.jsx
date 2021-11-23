import React,{useState} from 'react'
import MasterLayout from '../layout/MasterLayout'
import DoctorsComponent from '../components/DoctorsComponent';
import SpecialistsComponent from '../components/SpecialistsComponent'

const MainContainer = () => {

    const [visibleDoc,setvisibleDoc]=useState('all');

    const updateVisibleDoc=(val)=>{
        
        setvisibleDoc(val);
        console.log(visibleDoc);
    }
    return (
      <MasterLayout >
          <>
            <SpecialistsComponent  updateVisibleDoc={updateVisibleDoc} />
            <DoctorsComponent  visibleDoc={visibleDoc} /></>
      </MasterLayout>
    )
}

export default MainContainer
