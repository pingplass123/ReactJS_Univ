import React from 'react'
import '../css/TestCategory.css'
import CardCategory from '../components/CardCategory';
import NavigationTab from '../components/NavigationTab';
import Load from '../components/loading';

class TestCategory extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          categorys: [],
          subCategorys: [],
          DataisLoaded: false 
      };
  }

  componentDidMount() {
      Promise.all([
          fetch("https://univelear.herokuapp.com/api/category"),
          fetch("https://univelear.herokuapp.com/api/subcategory")
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
          categorys: data1, 
          subCategorys: data2,
          DataisLoaded: true
      }));
  }
  render(){

    const { DataisLoaded, categorys,subCategorys } = this.state;
    console.log(categorys,subCategorys);
    const arrSubcategory1 = [],arrSubcategory2 = [],arrSubcategory3 = [],arrSubcategory4 = [];
    const arrSubcategory5 = [],arrSubcategory6 = [],arrSubcategory7 = [],arrSubcategory8 = [];
    const arrSubcategory = [];


    if(DataisLoaded){
      {subCategorys.data.map((data,idx) => {
        if (data.catagoriesID === 1) {
          arrSubcategory1.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
          // arrSubcategory1.push(data.sub_name)
        }

        if (data.catagoriesID === 2) {
          arrSubcategory2.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 3) {
          arrSubcategory3.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 4) {
          arrSubcategory4.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 5) {
          arrSubcategory5.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 6) {
          arrSubcategory6.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 7) {
          arrSubcategory7.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

        if (data.catagoriesID === 8) {
          arrSubcategory8.push({
            id: data.id,
            catagoriesID: data.catagoriesID,
            sub_name: data.sub_name,
            description: data.description,
            urlPhoto: data.urlPhoto,
          });
        }

      })}
    }
    
    arrSubcategory.push(arrSubcategory1,arrSubcategory2,arrSubcategory3,arrSubcategory4,arrSubcategory5,arrSubcategory6,arrSubcategory7,arrSubcategory8);
    if (!DataisLoaded) return <div>
        <Load /> </div> ;

    return (
      
      <div className="category">
        <div className="header">
          <div style={{fontWeight: 'bold', fontSize: '1.5rem', color:'white'}}>Discover your interesting</div>
          <div className="header-menu" style={{textAlign:'center'}}>
              <NavigationTab />
          </div>
        <div className="body">
          <div className="category-menu">
            {categorys.data.map((data,idx) => 
              <div className="category-title" style={{textAlign: 'left'}}>
                <div className='title' style={{fontWeight: 'bold', fontSize: '1.2rem'}}>
                  <div  style={{color:'white'}} key={data.id}>{data.name}</div>
                </div>
                <div className="subcategory scrollCard" style={{display: 'flex'}}>
                  {arrSubcategory.map((item,id)=>{
                    if(id === idx){
                      return {item},
                      item.map((info)=>{
                        return {info},

                        <CardCategory id={info.id} urlPhoto={info.urlPhoto} sub_name={info.sub_name} description={info.description} />
                     })
                    }
                })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      )
  }
}
          

export default TestCategory
