// project import
// import '@progress/kendo-theme-default/dist/all.css';
// import "@progress/kendo-theme-material/dist/all.css";
import Routes from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import './styling/custom.css'
// import { motion } from 'framer-motion'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.dark.css';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {

    // // useEffect(() => {
    // //     let isUserOnSignInPage = false;
    // //     isUserOnSignInPage = window.location.pathname === '/signin'

    // //     // setInterval(() => {
    // //     //     FetchedReports()
    // //     //         .then((res) => {
    // //     //             if(res?.data?.data?.length){
    // //     //                 notification.info({
    // //     //                     message: 'New TIs Added',
    // //     //                     placement: 'bottomRight',
    // //     //                     className: 'ant-notification ant-notification-dark'
    // //     //                 });
    // //     //             }
    // //     //         })
    // //     //         .catch((err) => { reRouteToLogin(err)})
    // //     // }
    // //     // ,1800000);
    // //     // setInterval(() => {
    // //     //     GetAlarms()
    // //     //         .then((res)=>{
    // //     //            if(res.data.length > 0) {
    // //     //             notification.info({
    // //     //                 message: 'New Alarms Added',
    // //     //                 placement: 'bottomRight',
    // //     //                 className: 'ant-notification ant-notification-dark'
    // //     //             });
    // //     //            }
    // //     //         })
    // //     //         .catch((err) => { reRouteToLogin(err)})
    // //     // }
    // //     // ,120000);
    // // }, [])


    return (
        // <motion.div
        // initial={{ x:-100, y: -100}}
        // animate={{ x:0, y:0}}
        // transition={{ duration: 1,type: 'spring', restDelta: 0.5 }}>
        <ThemeCustomization>
            {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    /> */}
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
        // </motion.div>

    )
}

export default App;

