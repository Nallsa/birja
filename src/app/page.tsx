import Cards from '@/components/Home/CardsHome/Cards';
import NewOrders from '@/components/Home/NewOrdersHome/NewOrders';
import NewsHome from '@/components/Home/NewsHome/NewsHome';

export default function Home() {
  return (
    <div className='max-w-[1320px]'>
      <Cards />
      <NewOrders />
      <NewsHome />
    </div>
  );
}
