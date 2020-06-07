/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Carol Greene
 * @license MIT
 * 
 */

class EasyHTTP {

  //make http get request
  async get(url) {
    const response = await fetch(url);
    const respData = await response.json();
    return respData;    
  }

  //make http post request
  async post(url,data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      const respData = await response.json();
      return respData
    }
  

  //make http put request
  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const respData = await response.json();
      return respData
    }
  

  //make an http delete request
  async delete(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }         
      })
      const respData = await 'Resource Deleted...'
      return respData
    }  
  
}

export const http = new EasyHTTP();
