import Link from '@mui/material/Link';
// import { Ratings } from '@/app/ui/customers/Ratings'; // Ratingsコンポーネントの正確なパスに置き換えてください
import { ContainedButtons } from '@/app/ui/customers/Button';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Button } from '@mui/material';

const Page: React.FC = () => {
  return (
    <>
      {/* 他のコンポーネント */}
      <Link href="#" color="inherit" fontWeight={'Bold'} fontSize={16}>
        参加者の名前
      </Link>
      {/* <Ratings /> */}
      <ContainedButtons />
      <Button />
      <LocalPrintshopIcon fontSize="large" />
    </>
  );
};

export default Page;
