import Carousel from './imageSlider'
import NewsandEvents from './news&events'
import Teacherstaff from './teachers&staffs'
import Academics from './academics'
import About from './about'
import Gallery from './gallery'


function Home() {
    const pages = [
        { component: <Carousel />, id: "slider" },
        { component: <About />, id: "history" },
        { component: <NewsandEvents />, id: "news" },
        { component: <Academics />, id: "academics" },
        { component: <Gallery />, id: "gallery" },
        { component: <Teacherstaff />, id: "staff" }
    ]

    return (
        <>

            <div className='container'>
                <div className='layout'>
                   {pages.map((pages) => (
                    <span key={pages.id}>
                        {pages.component}
                    </span>
                   ))}
                </div>
            </div>

        </>
    )
}
export default Home;
