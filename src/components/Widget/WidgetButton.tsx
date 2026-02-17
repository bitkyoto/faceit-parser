import { Card, CardContent } from "../ui/card";
import { useNavigate, useSearchParams } from 'react-router';

const WidgetButton = () => {
    const [params] = useSearchParams();
    const id = params.get("player");
    const navigate = useNavigate();
    const redirect = () => {
        navigate(id ? `/widget?player=${id}`: "");
    }
  return (
    <>
    <Card className="dark cursor-pointer" onClick={redirect}>
      <CardContent>
          <div className="flex items-center justify-center text-md">
            Добавить виджет для OBS
          </div>
      </CardContent>
    </Card>
    </>
  )
}

export default WidgetButton