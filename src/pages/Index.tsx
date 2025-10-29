import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'rooms', label: 'Номера' },
    { id: 'amenities', label: 'Удобства' },
    { id: 'prices', label: 'Цены' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'location', label: 'Расположение' },
    { id: 'excursions', label: 'Экскурсии' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const rooms = [
    { name: 'Стандарт', size: '18 м²', beds: '2 односпальные', price: 'от 3000₽' },
    { name: 'Комфорт', size: '22 м²', beds: '1 двуспальная', price: 'от 3500₽' },
    { name: 'Люкс', size: '28 м²', beds: '1 двуспальная + диван', price: 'от 4500₽' },
    { name: 'Семейный', size: '35 м²', beds: '2 двуспальные', price: 'от 5500₽' },
  ];

  const amenities = [
    { icon: 'Waves', title: 'Бассейн с подогревом', desc: 'Открытый бассейн работает круглый год' },
    { icon: 'Car', title: 'Парковка', desc: 'Бесплатная охраняемая парковка на 10 мест' },
    { icon: 'Wifi', title: 'Wi-Fi', desc: 'Высокоскоростной интернет на всей территории' },
    { icon: 'Coffee', title: 'Общий лаунж', desc: 'Уютная зона для отдыха и общения' },
    { icon: 'Flame', title: 'Баня на дровах', desc: 'Традиционная русская баня' },
    { icon: 'UtensilsCrossed', title: 'Мангальная зона', desc: 'Казан и принадлежности для барбекю' },
    { icon: 'Armchair', title: 'Лежаки у бассейна', desc: 'Бесплатные шезлонги и зонты' },
    { icon: 'MapPin', title: '100 м от моря', desc: 'Первая линия, прямой выход на пляж' },
  ];

  const prices = [
    { period: 'Октябрь - Декабрь', price: '3000₽/сутки', extra: '750₽', deposit: '3500₽' },
    { period: 'Январь - Май', price: '3000₽/сутки', extra: '750₽', deposit: '3500₽' },
    { period: 'Помесячно (Окт-Май)', price: '30 000₽/месяц', extra: '-', deposit: '5000₽' },
  ];

  const excursions = [
    { icon: 'Mountain', name: 'Красная Поляна', duration: '8 часов', price: 'от 2500₽' },
    { icon: 'TreePine', name: 'Сочинский нацпарк', duration: '6 часов', price: 'от 1800₽' },
    { icon: 'Map', name: 'Обзорная по Сочи', duration: '4 часа', price: 'от 1200₽' },
    { icon: 'Landmark', name: 'Абхазия', duration: '10 часов', price: 'от 3000₽' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ТАЙ</h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                У НАС ВСЕГДА ЛЕТО! ☀️
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Гостевой дом <span className="text-primary">У МОРЯ</span><br />
                <span className="text-3xl md:text-5xl">"ТАЙ"</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Мамайка, Сочи • 14 номеров • 100 метров от моря
              </p>
              <p className="text-base text-foreground/80">
                Гостевой дом с открытым бассейном с подогревом, парковкой на 10 машин и общим лаунджем. 
                Расположен на 1-ой линии в 100 метрах от моря.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('rooms')} className="gap-2">
                  Посмотреть номера
                  <Icon name="ChevronRight" size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/d8709afd-5df4-480a-bb8a-c58ba9c4f338.jpg"
                alt="Бассейн гостевого дома Тай"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Waves" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Бассейн с подогревом</p>
                    <p className="text-sm text-muted-foreground">Работает круглый год</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Наши номера</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              14 уютных номеров с современным ремонтом и всеми удобствами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/40">
                  <img
                    src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/2bf54908-fbf8-4722-b5eb-5e30d8f3562e.jpg"
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Maximize" size={16} />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Bed" size={16} />
                      <span>{room.beds}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-lg font-bold text-primary">{room.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Удобства</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Всё для комфортного отдыха на берегу Чёрного моря
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon name={amenity.icon} className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">А ещё у нас есть баня на дровах!</h3>
                <p className="text-muted-foreground">
                  Традиционная русская баня для полного релакса после пляжа. 
                  Идеальное место для восстановления сил в любое время года.
                </p>
                <Button onClick={() => scrollToSection('contacts')} className="gap-2">
                  Забронировать баню
                  <Icon name="Flame" size={18} />
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-8 text-center">
                  <Icon name="Flame" size={64} className="text-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold">Баня работает круглый год</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Цены на 2025/26 год</h2>
            <p className="text-muted-foreground text-lg">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {prices.map((price, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{price.period}</h3>
                  <p className="text-3xl font-bold">{price.price}</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доп. место</span>
                      <span className="font-medium">{price.extra}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Депозит</span>
                      <span className="font-medium">{price.deposit}</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>* Возвратный депозит возвращается после выезда</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Галерея</h2>
            <p className="text-muted-foreground text-lg">
              Атмосфера нашего гостевого дома
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-96">
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/d8709afd-5df4-480a-bb8a-c58ba9c4f338.jpg"
                alt="Бассейн"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/2bf54908-fbf8-4722-b5eb-5e30d8f3562e.jpg"
                alt="Номер"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/6a96d835-f2fc-4f42-9519-449fbbcaa3d2.jpg"
                alt="Пляж"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Icon name="Camera" size={64} className="text-primary mx-auto" />
                <p className="text-xl font-semibold">Больше фото в Instagram</p>
                <Button variant="outline" size="lg">Перейти</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Расположение</h2>
            <p className="text-muted-foreground text-lg">
              Мамайка, Сочи — идеальное место для отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">100 метров от моря</h3>
                  <p className="text-muted-foreground">
                    Расположен на 1-ой линии. До пляжа "Восход" или "73 км" — 600 метров по бетонной дороге.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Bus" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Удобная транспортная доступность</h3>
                  <p className="text-muted-foreground">
                    От остановки "Восход" до дома — 600 метров. Регулярное автобусное сообщение.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Plane" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Близко к аэропорту</h3>
                  <p className="text-muted-foreground">
                    Международный аэропорт Адлер-Сочи — 29 км. Около 30 минут на автомобиле.
                  </p>
                </div>
              </div>
              <div className="bg-secondary/40 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold">Рядом с домом:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Зимний театр Сочи — 6 км</li>
                  <li>• Парк "Ривьера" — 5 км</li>
                  <li>• Морской порт Сочи — 5 км</li>
                  <li>• Дагомыс — прогулочная зона</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Icon name="Map" size={64} className="text-primary mx-auto" />
                <p className="font-semibold text-lg">Карта загружается...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="excursions" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Экскурсии</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Организуем туры по городу, окрестностям Сочи и в Абхазию
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {excursions.map((excursion, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                    <Icon name={excursion.icon} className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{excursion.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        <span>{excursion.duration}</span>
                      </div>
                      <p className="text-lg font-bold text-primary mt-2">{excursion.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
            <h3 className="text-2xl font-bold">Популярные виды активного отдыха</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Пешие прогулки вдоль моря до Дагомыса или Мамайки, катание на велосипедах, 
              посещение аквапарков и дельфинария
            </p>
            <Button size="lg" onClick={() => scrollToSection('contacts')} className="gap-2">
              Заказать экскурсию
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Гостевой дом "ТАЙ"</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">Мамайка, Сочи, Краснодарский край</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@tai-sochi.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/40 rounded-xl p-6 space-y-3">
                <h4 className="font-semibold">Время работы</h4>
                <p className="text-sm text-muted-foreground">
                  Стойка регистрации работает круглосуточно
                </p>
                <p className="text-sm text-muted-foreground">
                  Заезд: с 14:00 • Выезд: до 12:00
                </p>
              </div>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Оставьте заявку</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (XXX) XXX-XX-XX"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Даты заезда</label>
                    <input
                      type="text"
                      placeholder="ДД.ММ.ГГГГ - ДД.ММ.ГГГГ"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <textarea
                      placeholder="Количество гостей, пожелания..."
                      rows={3}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-xl text-primary mb-1">ТАЙ</h3>
              <p className="text-sm text-muted-foreground">Гостевой дом у моря • Мамайка, Сочи</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Гостевой дом "ТАЙ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
