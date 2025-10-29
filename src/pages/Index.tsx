import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://cdn.poehali.dev/files/4ec685e5-0f9b-426b-9dcf-49a435b0674f.jpg',
    'https://cdn.poehali.dev/files/436490b2-04dd-44cf-94ed-ef59dd533bf8.jpg',
    'https://cdn.poehali.dev/files/6536cfe9-f887-4d6a-aa41-f7078a655183.jpg',
    'https://cdn.poehali.dev/files/f40767bf-9386-47f3-a955-f450c9045b4a.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <nav className="fixed top-0 left-0 right-0 glass-effect border-b border-black/5 z-50 animate-fade-in">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-light tracking-widest text-primary">ТАЙ</h1>
            <div className="hidden lg:flex gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`button-text transition-all duration-300 relative group ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-px bg-primary transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')} 
              className="hidden md:inline-flex px-8 py-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              variant="default"
            >
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Гостевой дом Тай ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            <div className="inline-block border border-white/40 text-white px-6 py-3 text-xs tracking-[0.2em] backdrop-blur-sm rounded-full">
              У НАС ВСЕГДА ЛЕТО
            </div>
            <h1 className="text-6xl md:text-8xl font-light text-white leading-[1.1] tracking-tight">
              Гостевой дом<br />
              <span className="italic font-normal">Тай</span>
            </h1>
            <div className="h-px w-24 bg-white/40" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Мамайка, Сочи • 14 номеров • 100 метров от моря
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('rooms')} 
                className="px-10 py-7 rounded-2xl bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                Посмотреть номера
              </Button>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="px-10 py-7 rounded-2xl bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Номера</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-xl text-muted-foreground font-light">
              14 уютных номеров с современным ремонтом и панорамными видами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, idx) => (
              <div key={idx} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative h-80 overflow-hidden mb-6 rounded-3xl shadow-lg">
                  <img
                    src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/2bf54908-fbf8-4722-b5eb-5e30d8f3562e.jpg"
                    alt={room.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">{room.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Icon name="Maximize" size={16} className="text-primary" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Bed" size={16} className="text-primary" />
                      <span>{room.beds}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xl font-light text-primary">{room.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-32 elegant-gradient">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Удобства</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-xl text-muted-foreground font-light">
              Всё для незабываемого отдыха на берегу Чёрного моря
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {amenities.map((amenity, idx) => (
              <div 
                key={idx} 
                className="text-center space-y-4 p-8 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 rounded-3xl animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/20 rounded-2xl group-hover:border-primary/40 transition-colors">
                  <Icon name={amenity.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-light">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto bg-white p-16 shadow-2xl rounded-3xl animate-scale-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light leading-tight">Баня на дровах</h3>
                <div className="h-px w-16 bg-primary/30" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Традиционная русская баня для полного релакса после пляжа. 
                  Идеальное место для восстановления сил в любое время года.
                </p>
                <Button 
                  onClick={() => scrollToSection('contacts')} 
                  className="px-8 py-6 rounded-2xl mt-6 hover:scale-105 transition-transform duration-300"
                >
                  Забронировать баню
                </Button>
              </div>
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <Icon name="Flame" size={80} className="text-accent/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Цены</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-xl text-muted-foreground font-light">
              Сезон 2025/26
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {prices.map((price, idx) => (
              <div 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="bg-primary text-white p-10 text-center space-y-4">
                  <h3 className="text-xl font-light tracking-wider">{price.period}</h3>
                  <div className="h-px w-12 bg-white/30 mx-auto" />
                  <p className="text-4xl font-light">{price.price}</p>
                </div>
                <div className="bg-white p-10 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-sm text-muted-foreground">Доп. место</span>
                      <span className="font-light">{price.extra}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-sm text-muted-foreground">Депозит</span>
                      <span className="font-light">{price.deposit}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full py-6 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 hover:scale-105" 
                    variant="outline"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Забронировать
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground italic">
            <p>Возвратный депозит возвращается после выезда</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 elegant-gradient">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Галерея</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[500px] overflow-hidden group cursor-pointer rounded-3xl shadow-xl animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/d8709afd-5df4-480a-bb8a-c58ba9c4f338.jpg"
                alt="Бассейн"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[500px] overflow-hidden group cursor-pointer rounded-3xl shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/2bf54908-fbf8-4722-b5eb-5e30d8f3562e.jpg"
                alt="Номер"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[500px] overflow-hidden group cursor-pointer rounded-3xl shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://cdn.poehali.dev/projects/5eb56f07-9c2d-46c2-b9f8-42e5b14481ff/files/6a96d835-f2fc-4f42-9519-449fbbcaa3d2.jpg"
                alt="Пляж"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2 h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col items-center justify-center space-y-6 rounded-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Camera" size={72} className="text-primary/30" />
              <p className="text-2xl font-light">Больше фото в Instagram</p>
              <Button variant="outline" size="lg" className="px-10 py-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                Перейти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Расположение</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-xl text-muted-foreground font-light">
              Мамайка, Сочи
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-slide-in-left">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light">100 метров от моря</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Расположен на первой линии. До пляжа "Восход" — 600 метров по бетонной дороге.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Bus" className="text-primary" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light">Транспортная доступность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    От остановки "Восход" до дома — 600 метров. Регулярное сообщение.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Plane" className="text-primary" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light">Аэропорт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Международный аэропорт Адлер-Сочи — 29 км, около 30 минут.
                  </p>
                </div>
              </div>
              <div className="bg-secondary/30 p-8 space-y-4 rounded-3xl">
                <h4 className="font-light text-lg">Рядом с домом</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Зимний театр Сочи — 6 км</p>
                  <p>Парк "Ривьера" — 5 км</p>
                  <p>Морской порт Сочи — 5 км</p>
                </div>
              </div>
            </div>
            <div className="h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl flex items-center justify-center animate-slide-in-right">
              <div className="text-center space-y-6">
                <Icon name="Map" size={80} className="text-primary/20 mx-auto" />
                <p className="text-lg font-light text-muted-foreground">Интерактивная карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="excursions" className="py-32 elegant-gradient">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Экскурсии</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-xl text-muted-foreground font-light">
              Организуем туры по Сочи и Абхазии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {excursions.map((excursion, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 text-center space-y-6 hover:shadow-2xl transition-all duration-500 group rounded-3xl animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 border border-primary/20 rounded-2xl group-hover:border-primary/40 transition-colors">
                  <Icon name={excursion.icon} className="text-primary" size={36} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light">{excursion.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{excursion.duration}</span>
                  </div>
                  <p className="text-xl font-light text-primary pt-3">{excursion.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-white p-16 text-center space-y-8 shadow-2xl rounded-3xl animate-scale-in">
            <h3 className="text-3xl md:text-4xl font-light">Активный отдых</h3>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Пешие прогулки вдоль моря, катание на велосипедах, 
              посещение аквапарков и дельфинария
            </p>
            <Button size="lg" onClick={() => scrollToSection('contacts')} className="px-10 py-7 rounded-2xl hover:scale-105 transition-transform duration-300">
              Заказать экскурсию
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-light text-luxury">Контакты</h2>
            <div className="h-px w-16 bg-primary/30 mx-auto" />
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-12 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl font-light">Гостевой дом "Тай"</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Icon name="MapPin" className="text-primary mt-2" size={20} />
                    <div className="space-y-1">
                      <p className="font-light">Адрес</p>
                      <p className="text-muted-foreground">Мамайка, Сочи, Краснодарский край</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Icon name="Phone" className="text-primary mt-2" size={20} />
                    <div className="space-y-1">
                      <p className="font-light">Телефон</p>
                      <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Icon name="Mail" className="text-primary mt-2" size={20} />
                    <div className="space-y-1">
                      <p className="font-light">Email</p>
                      <p className="text-muted-foreground">info@tai-sochi.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/30 p-8 space-y-4 rounded-3xl">
                <h4 className="font-light text-lg">Время работы</h4>
                <p className="text-sm text-muted-foreground">
                  Стойка регистрации работает круглосуточно
                </p>
                <p className="text-sm text-muted-foreground">
                  Заезд: с 14:00 • Выезд: до 12:00
                </p>
              </div>
            </div>
            <div className="bg-white p-10 shadow-2xl rounded-3xl animate-slide-in-right">
              <h3 className="text-2xl font-light mb-8">Заявка на бронирование</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-sm tracking-wider mb-3 block text-muted-foreground">ИМЯ</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-0 py-3 border-0 border-b border-border focus:outline-none focus:border-primary transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm tracking-wider mb-3 block text-muted-foreground">ТЕЛЕФОН</label>
                  <input
                    type="tel"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    className="w-full px-0 py-3 border-0 border-b border-border focus:outline-none focus:border-primary transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm tracking-wider mb-3 block text-muted-foreground">ДАТЫ ЗАЕЗДА</label>
                  <input
                    type="text"
                    placeholder="ДД.ММ.ГГГГ - ДД.ММ.ГГГГ"
                    className="w-full px-0 py-3 border-0 border-b border-border focus:outline-none focus:border-primary transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm tracking-wider mb-3 block text-muted-foreground">КОММЕНТАРИЙ</label>
                  <textarea
                    placeholder="Количество гостей, пожелания..."
                    rows={3}
                    className="w-full px-0 py-3 border-0 border-b border-border focus:outline-none focus:border-primary transition-colors resize-none bg-transparent"
                  />
                </div>
                <Button className="w-full py-7 rounded-2xl mt-4 hover:scale-105 transition-transform duration-300">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light tracking-widest text-primary mb-2">ТАЙ</h3>
              <p className="text-sm text-muted-foreground">Гостевой дом у моря • Мамайка, Сочи</p>
            </div>
            <div className="flex gap-6">
              <button className="w-12 h-12 border border-border/50 rounded-2xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300">
                <Icon name="Instagram" size={18} />
              </button>
              <button className="w-12 h-12 border border-border/50 rounded-2xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300">
                <Icon name="Facebook" size={18} />
              </button>
              <button className="w-12 h-12 border border-border/50 rounded-2xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300">
                <Icon name="Phone" size={18} />
              </button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>© 2025 Гостевой дом "Тай". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;