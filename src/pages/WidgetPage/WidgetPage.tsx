import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import { useStore } from "@/components/zustand/store";
import { findPlayer, getStats } from "@/utils/requests";
import { StatsTable } from '@/components/StatsTable/StatsTable';
const WidgetPage = () => {
  const { setProfile, profile, setStats} = useStore((store) => store);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("player");
  const [_, setError] = useState(undefined);
  useEffect(() => {
    if (!id) return;
    if (!profile || profile.id !== id) {
      findPlayer(id, setProfile, setError);
    }
  }, [id]);

  useEffect(() => {
    if (profile) {
      getStats(profile.player_id, setStats);
    }
  }, [profile]);

  return (
    <div className="dark gap-y-4 text-white border-1 rounded-xl w-100 p-10 bg-background">
      <div className='flex flex-col gap-4'>
          <div className='flex gap-x-2 justify-center'>
            <span>
            {profile?.nickname}
            </span>
            Статистика за 30 игр
          </div>
          <StatsTable />
      </div>
    </div>
  )
}

export default WidgetPage