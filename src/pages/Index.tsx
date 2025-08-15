import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const profiles = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      image: "/img/82e67238-9444-4e81-af11-e10b32563d19.jpg",
      location: "Москва",
      interests: ["Путешествия", "Фотография", "Кулинария", "Йога"],
      bio: "Люблю открывать новые места и готовить для друзей"
    },
    {
      id: 2,
      name: "Максим",
      age: 28,
      image: "/img/1c4d06e3-c3a0-43ca-b770-b843e5649e72.jpg",
      location: "Санкт-Петербург",
      interests: ["Спорт", "Музыка", "Программирование", "Книги"],
      bio: "IT-специалист, который любит активный отдых"
    },
    {
      id: 3,
      name: "София",
      age: 23,
      image: "/img/f4ce3677-1ea4-4cb7-aa2d-80e48f611de4.jpg",
      location: "Екатеринбург",
      interests: ["Искусство", "Танцы", "Кино", "Психология"],
      bio: "Творческая натура в поисках вдохновения"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={28} className="text-primary" />
          <h1 className="text-2xl font-bold text-primary">ССХ ОХиТА</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary font-medium border-b-2 border-primary pb-1">Главная</a>
          <a href="#matches" className="text-muted-foreground hover:text-foreground transition-colors">Анкеты</a>
          <a href="#messages" className="text-muted-foreground hover:text-foreground transition-colors">Сообщения</a>
          <a href="#profile" className="text-muted-foreground hover:text-foreground transition-colors">Профиль</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Войти</Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">Регистрация</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Найди свою половинку
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Знакомства нового поколения с детальными анкетами и умным поиском по интересам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-8">
              <Icon name="Search" size={20} className="mr-2" />
              Начать поиск
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Создать анкету
            </Button>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section id="search" className="py-16 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Поиск по параметрам</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="text-sm font-medium mb-2 block">Возраст</label>
              <div className="flex gap-2">
                <Input placeholder="От" type="number" />
                <Input placeholder="До" type="number" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Город</label>
              <Input placeholder="Введите город" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Интересы</label>
              <Input placeholder="Хобби, увлечения" />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section id="matches" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Рекомендованные анкеты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Icon name="MapPin" size={12} className="mr-1" />
                        {profile.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold">{profile.name}</h4>
                    <span className="text-muted-foreground">{profile.age} лет</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Лайк
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Messages & Chat Demo */}
      <section id="messages" className="py-16 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Сообщения</h3>
          <Tabs defaultValue="chats" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chats">Чаты</TabsTrigger>
              <TabsTrigger value="matches">Совпадения</TabsTrigger>
            </TabsList>
            <TabsContent value="chats" className="mt-6">
              <div className="space-y-4">
                {profiles.slice(0, 2).map((profile) => (
                  <Card key={profile.id} className="p-4 hover:bg-accent/20 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={profile.image} />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{profile.name}</h4>
                          <span className="text-xs text-muted-foreground">2 ч назад</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Привет! Как дела?</p>
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="matches" className="mt-6">
              <div className="text-center py-8">
                <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">У вас 3 новых совпадения!</p>
                <Button className="mt-4 bg-gradient-to-r from-primary to-secondary">
                  Посмотреть
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы найти любовь?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Создайте подробную анкету и начните знакомиться уже сегодня
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Создайте профиль</h4>
              <p className="text-sm text-muted-foreground">Расскажите о себе и своих интересах</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Найдите совпадения</h4>
              <p className="text-sm text-muted-foreground">Ищите людей по общим интересам</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageHeart" size={24} className="text-white" fallback="Heart" />
              </div>
              <h4 className="font-semibold mb-2">Начните общение</h4>
              <p className="text-sm text-muted-foreground">Знакомьтесь и стройте отношения</p>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-12">
            Зарегистрироваться бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Heart" size={24} className="text-primary" />
            <span className="text-xl font-bold text-primary">ССХ ОХиТА</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Лучший сервис знакомств с детальными анкетами
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">О нас</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}