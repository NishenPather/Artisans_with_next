import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import("../components/Map/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default () => <DynamicMap />;