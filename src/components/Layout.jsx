import Footer from "./Footer";
function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col min-h-screen">
                <main className="flex-1 overflow-y-auto">{children}</main>
                <Footer/>
            </div>
        </div>

    );
}

export default Layout;