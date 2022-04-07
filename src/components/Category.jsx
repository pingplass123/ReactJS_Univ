import React from 'react'
import {img} from 'react-image'
import '../css/Category.css'
// import Card from "./Card";

class Category extends React.Component {

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
            fetch("http://127.0.0.1:8000/api/catagory"),
            fetch("http://127.0.0.1:8000/api/subcategory")
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
        if (!DataisLoaded) return <div>
            <h1> Pleses wait for loading data </h1> </div> ;

  return (
      <div class="div">
          <head>
              <div>Test</div>
          </head>
        {subCategorys.data.map((data, idx) => (
         <body>
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                            <h3>{data.sub_name}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>{data.id}</p>
                                <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        ))}
    </div>
  )
}
}

export default Category