import React, { useEffect ,useState} from 'react'
import axios from 'axios'
const FetchData = ({cat}) => {
    const [Data, setData] = useState("")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            cat ? `https://linesnews.onrender.com/api/news-datas?category=${cat}` : 'https://linesnews.onrender.com/api/news-datas'
          );
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [cat]);

    

  return (
    <div className='container my-4'>
      <h2 style={{fontWeight:700}}>Headlines</h2>
      <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"auto"}}>
      {Data.length > 0 ? (
        Data.map((item, index) => {
            if (item.attributes.category === cat) {
              return (
                <div key={index} className="container p-4" style={{ boxShadow: "2px 2px 7px grey", borderRadius: "10px" }}>
                  <h5 className="my-4">{item.attributes.headline}</h5>
                <div className="container d-flex justify-content-center align-items-left flex-row my-2">
                    <div className='d-flex justify-content-center align-items-left flex-column'
                    style={{
                      height:"15vh",
                      width:"60%"
                    }}>
                      <p style={{ fontSize:"14px",fontFamily:"sans-serif",
                      fontWeight:"530",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"space-between",                
                      boxShadow:"1px 1px 3px silver",
                      padding:"4px"}}>
                      <span style={{
                        marginRight:"50%",fontWeight:"800",
                        fontFamily:"cursive"
                      }}>Sources:</span> {item.attributes.newsSource}</p>
                      <p style={{ fontSize:"14px",fontFamily:"sans-serif",
                      fontWeight:"530",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"space-evenly",                
                      boxShadow:"1px 1px 3px silver",
                      padding:"4px"
                      }}>
                        <span style={{
                        marginRight:"50%",fontWeight:"800",
                        fontFamily:"cursive"
                      }}>Hashtags:</span> {item.attributes.hashtags}</p>
                    </div>
                    <div className='container d-flex justify-content-center align-items-center' style={{
                      height:"15vh",
                      width:"40%"
                    }}><img
                     className='img-fluid '
                     src={item.attributes.newsIcon}
                     style={{
                      height:"20vh",
                      width:"100%",
                      objectFit:"contain"
                     }}
                    /></div>
                  </div>
                </div>
              );
            } 
            if ('GENERAL' === cat || cat==='') {
              return (
                <div key={index} className="container p-4 m-4" style={{ boxShadow: "2px 2px 7px grey", borderRadius: "10px" }}>
                  <h5 className="my-4">{item.attributes.headline}</h5>
                <div className="container d-flex justify-content-center align-items-left flex-row my-2">
                    <div className='d-flex justify-content-center align-items-left flex-column'
                    style={{
                      height:"15vh",
                      width:"60%"
                    }}>
                      <p style={{ fontSize:"14px",fontFamily:"sans-serif",
                      fontWeight:"530",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"space-between",                
                      boxShadow:"1px 1px 3px silver",
                      padding:"4px"}}>
                      <span style={{
                        marginRight:"50%",fontWeight:"800",
                        fontFamily:"cursive"
                      }}>Sources:</span>{item.attributes.newsSource}</p>
                      <p style={{ fontSize:"14px",fontFamily:"sans-serif",
                      fontWeight:"530",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"space-evenly",                
                      boxShadow:"1px 1px 3px silver",
                      padding:"4px"
                      }}>
                        <span style={{
                        marginRight:"50%",fontWeight:"800",
                        fontFamily:"cursive"
                      }}>Hashtags:</span> {item.attributes.hashtags}</p>
                    </div>
                    <div className='container d-flex justify-content-center align-items-center' style={{
                      height:"15vh",
                      width:"40%"
                    }}><img
                     className='img-fluid '
                     src={item.attributes.newsIcon}
                     style={{
                      height:"20vh",
                      width:"100%",
                      objectFit:"contain"
                     }}
                    /></div>
                  </div>
                </div>
              );
            }
            else{

            }
            
          })
        ) : (
          "No data available."
        )}
        </div>
    </div>
  )
}

export default FetchData











