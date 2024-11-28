import Spline from '@splinetool/react-spline';
import Login from '../components/Auth/Login';

export default function Home() {
  return (
    <div className='h-screen relative'>
        <Spline className='absolute' scene="https://prod.spline.design/vQ9Athq16dbrwBzS/scene.splinecode" />
        <Login/>
    </div>
  );
}


