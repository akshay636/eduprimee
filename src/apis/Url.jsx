import axios from "axios";
const api= axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=UUpRmvjdu3ixew5ahydZ67uA&key=AIzaSyD9d5mLmQEw1G9GaPfEYR0YS33zrTiC1Hc',
        body:{},
        headers: {'Authorization': "Bearer " +' ya29.A0ARrdaM81_QH1qfhZsnTRKiyfaOFHM-60R977lD1qVLyLXSbLiecet2S8hriZOwk-MD5ojPPbEhSfkNr9Z6TvGINyJdsq5TcAntP3Sz9ott6dLpyLkecDcUtqmiHVeQMSGYjZk9aufjLuybv319KMCf1Lpezz'}

    }
)
export default api;