import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios';
// import './search.css'

const SearchResults = () => {
    const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch news articles when the component mounts
    axios.get('https://linesnews.onrender.com/api/news-datas').then((response) => {
      setArticles(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter articles based on the search query in the headline
    const filteredArticles = articles.data.filter((article) => {
      return article.attributes.headline.toLowerCase().includes(query);
    });

    setFilteredArticles(filteredArticles);
  };
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredArticles([]);
    }
  }, [searchQuery]);

  return (
    <div className='container my-4'>
      <h1 style={{fontWeight:700}}>News Dashboard</h1>
      <input
        style={{border:"2px solid grey",width:"100%",borderRadius:"5px",padding:"3px"}}
        type="text"
        placeholder="Search for articles"
        value={searchQuery}
        onChange={handleSearch}
        />
      <div className='container d-flex justify-content-center align-items-center flex-column my-3' >
        {searchQuery !== '' && filteredArticles.length === 0 ? (
          <p>No search results found</p>
        ) : (filteredArticles.map((article) => 
        (
          <div key={article.id} className="container p-4 m-2" style={{ boxShadow: "2px 2px 7px grey", borderRadius: "10px" }}>   
              <h4 className="heading my-4">{article.attributes.headline}</h4>
                <div className="container d-flex justify-content-center align-items-left flex-row my-2">
                    <div className='d-flex justify-content-center align-items-left flex-column'
                    style={{
                      height:"15vh",
                      width:"60%"
                    }}>
                      <p
                      style={{ fontSize:"14px",fontFamily:"sans-serif",
                      fontWeight:"530",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"space-between",                
                      boxShadow:"1px 1px 3px silver",
                      padding:"4px"}}>
                      <span style={{
                        marginRight:"50%",fontWeight:"800",
                        fontFamily:"cursive"
                      }}>Sources:</span> {article.attributes.newsSource}</p>
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
                      }}>Hashtags:</span>
                         {article.attributes.hashtags}</p>
                    </div>
                    <div className='container d-flex justify-content-center align-items-center' style={{
                      height:"15vh",
                      width:"40%"
                    }}><img
                     className='img-fluid '
                     src={article.attributes.newsIcon}
                     style={{
                      height:"20vh",
                      width:"100%",
                      objectFit:"contain"
                     }}
                    /></div>
                  </div>
          </div>
        )))}
      </div>
    </div>
  )
}

export default SearchResults;
