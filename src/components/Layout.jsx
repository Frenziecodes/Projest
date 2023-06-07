import Footer from "./Footer";
import ProjestNav from "./ProjestNav";
import BackToTop from './BackToTop';
function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col min-h-screen">
                <ProjestNav/>
                <main className="flex-1 overflow-y-auto">{children}</main>
                <BackToTop/>                
                <hr/>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;