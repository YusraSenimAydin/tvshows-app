# TV Şovları Arama ve Listeleme Uygulaması

## Mimari Kararlar
Bu uygulama, TV şovlarını kategori bazında listeleme, detaylarını görüntüleme ve kullanıcıların belirli şovları arayabileceği bir platform sunmaktadır. Projede Vue.js frontend framework'ü, Vue Router, Vuex ve Axios kullanılmıştır. TV şov verileri TVMaze API'si aracılığıyla sağlanmaktadır.

## Projenin Genel Yapısı
- **Vue.js:** Uygulamanın temel framework'ü olarak Vue kullanıldı. Vue'nun component yapısı, kodun daha modüler ve sürdürülebilir olmasını sağladı.
- **Vue Router:**  Sayfa geçişleri ve dinamik rota oluşturmak için kullanıldı. Örneğin, show/:id rotası ile bir TV şovunun detay sayfasına yönlendiriliyor.
- **Vuex:**  Global state yönetimi için kullanıldı. Kategorilere göre TV şovlarını çekme, arama sonuçlarını saklama ve seçili şovun detaylarını gösterme işlemleri Vuex üzerinden yönetiliyor.
- **Axios:**  API ile iletişim kurmak için kullanıldı. Asenkron veri çekme işlemleri Axios ile yapıldı.
- **Tailwind CSS:**  Kullanıcı arayüzü tasarımı için Tailwind CSS kullanılarak hızlı ve modern bir tasarım oluşturuldu.

## Özellikler
**1.Kategorilere Göre TV Şovlarını Listeleme:** Ana sayfada kullanıcılar farklı kategorilerdeki (Drama, Komedi, Aksiyon vb.) TV şovlarını görebilir.
**2. TV Şovu Arama:** Kullanıcılar belirli bir TV şovunu adını veya kategoriye göre arayabilir.
**3.Detaylı TV Şovu Bilgileri:** Seçilen bir TV şovu hakkında detaylı bilgiler görüntülenebilir.
**4.Yüksek Puanlı Şovlar:** IMDB'den 7+ puan almış TV şovları ayrı bir sayfada listelenmektedir.
**5.Yüklenme Animasyonu:** Veri yüklenirken kullanıcılara görsel bir yüklenme animasyonu sunulmaktadır.
## Projeyi Çalıştırma
### Gereksinimler
Node.js (v12 veya daha yeni bir sürüm)
Vue CLI (global olarak kurulmuş olmalıdır)
### Kurulum

Bu projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

 **1.Depoyu Klonlayın**

   Öncelikle, projeyi yerel makinenize klonlayın:

 ```
  git clone https://github.com/YusraSenimAydin/tvshows-app
  cd tvshows-app
 ```

 **2.Bağımlılıkları Yükleyin**

```
npm install
 ```

 **3.Geliştirme Sunucusunu Başlatın**
Geliştirme sunucusunu başlatın:

```
 npm run dev
 ```

- Bu komut, projeyi yerel geliştirme sunucusunda çalıştırır. Tarayıcınızda http://localhost:5174 adresini ziyaret ederek uygulamayı görüntüleyebilirsiniz.

## Proje Yapısı
**src/api:** TV şovlarıyla ilgili API isteklerinin bulunduğu dosyalar.
**src/components:** Tekrar kullanılabilir Vue bileşenlerinin bulunduğu klasör.
**ShowCard.vue:** TV şovlarının küçük kart formatında gösterildiği bileşen.
**GenreSection.vue:** Kategori bazlı TV şovlarının listelendiği bileşen.
**src/views:** Uygulamadaki farklı sayfaları temsil eden bileşenler.
**Home.vue:** Ana sayfa bileşeni, kategorilere göre TV şovlarını listeler.
**ShowDetails.vue:** Seçilen TV şovunun detaylarını gösterir.
**HighRated.vue:** IMDB'den yüksek puan almış TV şovlarını listeler.
**src/store:** Vuex store dosyası. Uygulama genelinde kullanılan state yönetimi burada yapılır.

## API Kullanımı
**getShowsByGenre:** Kategoriye göre TV şovlarını getirir.
**getShowDetails:** Belirli bir şovun detaylarını getirir.
**searchShowsAPI**: Kullanıcı tarafından girilen arama kriterlerine göre şovları arar.
**getHighRatedShows:** IMDB'den 7+ puan almış TV şovlarını getirir.

## Önemli Notlar
- Bu proje sadece TVMaze API'si ile çalışmaktadır. API'den çekilen veriler anlık olarak yüklenecektir.
- Projede Tailwind CSS kullanıldığı için hızlı ve esnek bir şekilde stil yönetimi yapılmıştır.
- API hatalarını yakalamak ve kullanıcıya geri bildirimde bulunmak için try-catch blokları kullanıldı.

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır.

