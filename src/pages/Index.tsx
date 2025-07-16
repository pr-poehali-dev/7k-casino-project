import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const games = [
    { name: 'Игровые автоматы', count: '7000+', icon: 'Cherry' },
    { name: 'Рулетка', count: '12', icon: 'CircleDot' },
    { name: 'Блэкджек', count: '8', icon: 'Spade' },
    { name: 'Покер', count: '15', icon: 'Heart' },
    { name: 'Live Казино', count: '50+', icon: 'Video' },
    { name: 'Турниры', count: '24/7', icon: 'Trophy' }
  ];

  const bonuses = [
    { title: 'Приветственный бонус', amount: '600$ + 280 FS', desc: 'На первые 4 депозита' },
    { title: 'Кэшбэк', amount: '10%', desc: 'Каждую неделю' },
    { title: 'VIP программа', amount: '20%', desc: 'Эксклюзивные бонусы' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                7К CASINO
              </div>
              <Badge className="bg-yellow-500 text-black font-semibold">Официальный сайт</Badge>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#games" className="hover:text-yellow-400 transition-colors">Игры</a>
              <a href="#bonuses" className="hover:text-yellow-400 transition-colors">Бонусы</a>
              <a href="#tournaments" className="hover:text-yellow-400 transition-colors">Турниры</a>
              <a href="#mirrors" className="hover:text-yellow-400 transition-colors">Зеркала</a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                Вход
              </Button>
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-400 hover:to-yellow-500">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/477204fc-0f59-4e3d-92b5-507eaea50ae3.jpg" 
            alt="7К Казино" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                7К КАЗИНО
              </span>
              <br />
              <span className="text-white">ОНЛАЙН</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Лицензированное онлайн казино с более чем 7000 игровых автоматов от ведущих провайдеров. 
              Быстрые выплаты, честная игра, круглосуточная поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg px-8 py-4 hover:from-yellow-400 hover:to-yellow-500 hover-scale">
                <Icon name="Play" className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-lg px-8 py-4">
                <Icon name="Gift" className="mr-2" />
                Получить бонус
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-green-400">
                <Icon name="Shield" className="mr-2" size={16} />
                Лицензия Curacao eGaming
              </div>
              <div className="flex items-center text-blue-400">
                <Icon name="Clock" className="mr-2" size={16} />
                Выплаты за 15 минут
              </div>
              <div className="flex items-center text-purple-400">
                <Icon name="Users" className="mr-2" size={16} />
                500,000+ игроков
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Игры казино
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Более 7000 игр от лучших провайдеров мира</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover-scale cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon name={game.icon} size={32} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{game.name}</h3>
                  <p className="text-yellow-400 font-bold">{game.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Бонусы и акции
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Щедрые бонусы для новых и постоянных игроков</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover-scale">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-yellow-400 mb-2">{bonus.title}</CardTitle>
                  <div className="text-4xl font-bold text-white mb-2">{bonus.amount}</div>
                  <p className="text-gray-400">{bonus.desc}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-400 hover:to-yellow-500">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Мобильная версия</h3>
              <p className="text-gray-400">Играйте в любом месте</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Быстрые платежи</h3>
              <p className="text-gray-400">Депозиты и выводы за минуты</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Поддержка 24/7</h3>
              <p className="text-gray-400">Всегда готовы помочь</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Безопасность</h3>
              <p className="text-gray-400">SSL шифрование данных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mirrors Section */}
      <section id="mirrors" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Рабочие зеркала 7К
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Всегда доступные ссылки для входа</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-800/50 border-yellow-500/30">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-yellow-400 font-mono">7k-casino-official.com</span>
                    <Badge className="bg-green-500 text-black">Активно</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-yellow-400 font-mono">7k-casino-mirror.net</span>
                    <Badge className="bg-green-500 text-black">Активно</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <span className="text-yellow-400 font-mono">7k-casino-new.org</span>
                    <Badge className="bg-green-500 text-black">Активно</Badge>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-400 hover:to-yellow-500">
                  <Icon name="Link" className="mr-2" />
                  Получить актуальное зеркало
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                7К CASINO
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Лицензированное онлайн казино. Игры проводятся в соответствии с правилами Curacao eGaming.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Игровые автоматы</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Live казино</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Рулетка</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Покер</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">О казино</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Ответственная игра</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Чат 24/7</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 7К Casino. Все права защищены. Играйте ответственно. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;