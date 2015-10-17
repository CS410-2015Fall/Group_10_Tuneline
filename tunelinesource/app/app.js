import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('home', '/',
    route('tuneline'),
    route('settings')
  )
);