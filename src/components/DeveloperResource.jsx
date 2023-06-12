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
        <section>
            <div>
                {IconComponent && <IconComponent className='w-6 h-6'/>}
            </div>
            <div>
                <h3>{name}</h3>
                <p>{Description}</p>
                <a href="{link}" target='_blank' rel='noopener noreferrer'>
                    visit resource
                </a>
            </div>
            
        </section>
    )
}

export default DeveloperResource;