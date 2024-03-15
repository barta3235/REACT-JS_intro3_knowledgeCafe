import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center mx-4 border-b-2 mb-8 py-3'>
            <h1 className='text-3xl font-bold'>Knowledge Kaffee</h1>
            <img src={profile} alt="loading" />
        </header>
    );
};

export default Header;