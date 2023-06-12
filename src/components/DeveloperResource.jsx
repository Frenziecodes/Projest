import { BookOpenIcon, VideoCameraIcon, WrenchScrewdriverIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
const DeveloperResource =({icon, name, Description, link}) => {
    let IconComponent;

    switch (icon){
        case 'video':
            IconComponent = VideoCameraIcon;
            break;
        case 'book':
            IconComponent = BookOpenIcon;
            break;
        case 'tool':
            IconComponent = WrenchScrewdriverIcon;
            break;
        case 'website':
            IconComponent = ComputerDesktopIcon;
            break;
        default:
            IconComponent = null;
    }
    return(
        <section className='bg-white h-44 p-2 flex flex-col justify-center items-center'>
            <div>
                {IconComponent && <IconComponent className='w-6 h-6'/>}
            </div>
            <div>
                <h3 className='text-center my-3 text-xl text-blue-800 font-semibold'>{name}</h3>
                <p>{Description}</p>
                <a href="{link}" target='_blank' rel='noopener noreferrer' className='flex justify-center items-center bg-blue-800 w-1/4 h-10'>
                    visit resource
                </a>
            </div>
            
        </section>
    )
}

export default DeveloperResource;