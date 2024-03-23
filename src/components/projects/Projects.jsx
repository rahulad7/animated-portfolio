import './projects.scss'

const work = [
    {
        id: 1,
        title: "Responsive Website",
        img: "https://www.freepik.com/free-photos-vectors/project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates"
    },
    {
        id: 2,
        title: "Weather App",
        img: "https://www.freepik.com/free-photos-vectors/project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates"
    },
    {
        id: 3,
        title: "ChatGPT Clone",
        img: "https://www.freepik.com/free-photos-vectors/project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates"
    },
    {
        id: 4,
        title: "Pikachu App",
        img: "https://www.freepik.com/free-photos-vectors/project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates"
    },
    {
        id: 5,
        title: "Todo App",
        img: "https://www.freepik.com/free-photos-vectors/project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia quidem cum officiis nisi quisquam veniam tempora natus omnis unde repudiandae, eaque earum provident fuga voluptate, non vero consequuntur voluptates"
    },
]

const Pages = ({work}) => {
    return <section>{work.title}</section>
};

const Projects = () => {
  return (
    <div className='project'>
        <div className="progress">

        </div>
        {work.map((item) => (
            <Pages item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Projects
