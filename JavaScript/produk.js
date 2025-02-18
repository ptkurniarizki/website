const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        function filterProducts(category) {
            // Ambil semua elemen produk
            const products = document.querySelectorAll('.product-card');
        
            // Loop melalui setiap produk
            products.forEach(product => {
                // Cek apakah produk memiliki kategori yang sesuai dengan yang dipilih
                if (product.getAttribute('data-category') === category || category === 'all') {
                    // Tampilkan produk jika sesuai
                    product.classList.add('active');
                } else {
                    // Sembunyikan produk jika tidak sesuai
                    product.classList.remove('active');
                }
            });
        }
        function openPopup(button) {
            const productCard = button.closest('.product-card');
            if (!productCard) {
                console.error("❌ Product card tidak ditemukan!");
                return;
            }
        
            const titleElement = productCard.querySelector('.product-title');
            const imageElement = productCard.querySelector('.product-image');
            const priceElement = productCard.querySelector('.price');
            const tagElements = productCard.querySelectorAll('.tag');
        
            if (!titleElement || !imageElement || !priceElement) {
                console.error("❌ Salah satu elemen dalam product card tidak ditemukan!");
                return;
            }
        
            const title = titleElement.innerText.trim();
            const imageSrc = imageElement.src;
            const price = priceElement.innerText;
            const tags = [...tagElements].map(tag => `<span class="tag">${tag.innerText}</span>`).join(' ');
        
            console.log("🔎 Title:", title);
            console.log("🖼️ Image Source:", imageSrc);
            console.log("💰 Price:", price);
        
            let description = "";
            if (title.includes("KASTURI'QU")) {
                description = "Keharuman eksotis dan mewah dengan parfum beraroma kasturi. Aroma kasturi adalah perpaduan yang sempurna antara kemewahan dan kehangatan, menciptakan kesan yang elegan dan tak terlupakan. Parfum ini menghadirkan aroma yang kaya dan sensual, dengan nuansa musky yang memikat. Sentuhan hangat dan manis dari kasturi memberikan keharuman yang mendalam dan tahan lama.";
            } else if (title.includes("KISWAH'QU")) {
                description = "Harum Kiswah Ka’bah, kain penutup suci dari Ka’bah di Makkah, sering digambarkan memiliki aroma yang khas dan menenangkan. Aroma ini adalah hasil dari campuran berbagai bahan alami dan wewangian yang digunakan dalam perawatan dan pemeliharaan Kiswah.";
            } else if (title.includes("RAUDHAH'QU")) {
                description = "Raudhah, sebuah area kecil di dalam Masjid Nabawi di Madinah, Arab Saudi, dikenal sebagai salah satu tempat paling suci dalam Islam. Tempat ini sering digambarkan memiliki aroma yang khas dan menenangkan, yang menambah keagungan dan ketenangan spiritual saat berada di sana.";
            } else if (title.includes("RAUDHAH ROLL ON")) {
                description = "RAUDHAH ROLL ON adalah pengharum tubuh berbasis minyak dengan aroma segar dan lembut yang memberikan kesan alami dan menenangkan. Dibuat dari bahan-bahan berkualitas tinggi, produk ini cocok untuk penggunaan sehari-hari, memberikan sensasi wewangian yang menyegarkan dan tahan lama. Praktis dan mudah dibawa, RAUDHAH ROLL ON adalah pilihan sempurna untuk menjaga kesegaran tubuh Anda sepanjang hari.";
            } else if (title.includes("KISWAH ROLL ON")) {
                description = "KISWAH ROLL ON adalah pengharum tubuh berbasis minyak dengan aroma kayu yang elegan dan mewah. Didesain untuk memberikan pengalaman wewangian eksklusif, produk ini cocok untuk acara formal maupun casual. Dibuat dari bahan berkualitas tinggi, KISWAH ROLL ON memberikan aroma tahan lama yang membuat Anda tetap percaya diri di setiap kesempatan.";
            } else if (title.includes("KASTURI ROLL ON")) {
                description = "KASTURI ROLL ON adalah pengharum tubuh berbasis minyak yang memadukan aroma musk manis, castoreum, biji ambrette, dan civet untuk menciptakan wewangian yang elegan dan tahan lama. Didesain khusus untuk memberikan kesegaran alami sepanjang hari, KASTURI ROLL ON cocok untuk segala aktivitas, baik formal maupun casual. Praktis dan mudah dibawa, produk ini menjadi pilihan tepat untuk menjaga kepercayaan diri dan kesegaran tubuh Anda di mana pun dan kapan pun.";
            } else if (title.includes("KOPI'QU")) {
                description = "Parfum aroma kopi memadukan aroma kopi yang autentik dengan sentuhan lembut vanila dan kayu manis, menciptakan pengalaman aroma yang mendalam dan menyenangkan. Keharuman ini sempurna untuk mereka yang menginginkan sesuatu yang berbeda dan unik, mengingatkan pada saat-saat santai dengan secangkir kopi favorit di tangan.";
            } else if (title.includes("MELATI'QU")) {
                description = "Nikmati keharuman yang lembut dan elegan dengan parfum beraroma melati, yang memadukan keindahan bunga melati yang mekar dengan sentuhan kemewahan yang tak tertandingi. Parfum ini menghadirkan aroma bunga melati yang manis dan memikat, menciptakan pengalaman yang penuh pesona dan romantis.";
            } else if (title.includes("SEREH'QU")) {
                description = "Parfum aroma sereh merah ini perpaduan sempurna dari berbagai komponen alami, menciptakan keharuman yang menyegarkan, menenangkan, dan elegan. Cocok untuk digunakan sehari-hari, parfum ini memberikan nuansa alami yang tak terlupakan dan membuat Anda merasa segar sepanjang hari.";
            } else if (title.includes("HEJO AFE BUBBLE GUM")) {
                description = "HEJO AFE BUBBLE GUM menghadirkan aroma manis dan menyenangkan seperti permen karet klasik, cocok bagi Anda yang ingin tampil ceria dan energik.<br><br>";
                description += "<strong>Catatan Aroma:</strong><br>";
                description += "- <strong>Top Notes:</strong> Strawberry, Cherry, dan Lemon<br>";
                description += "- <strong>Heart Notes:</strong> Cotton Candy dan Vanilla<br>";
                description += "- <strong>Base Notes:</strong> Musk dan Amber";
            } else if (title.includes("HEJO AFE COFFEE")) {
                description = "HEJO AFE COFFEE memiliki aroma kopi yang kaya dan memikat, memberikan sensasi hangat bagi pecinta kopi sejati.<br><br>";
                description += "<strong>Catatan Aroma:</strong><br>";
                description += "- <strong>Top Notes:</strong> Espresso dan Dark Chocolate<br>";
                description += "- <strong>Heart Notes:</strong> Caramel dan Roasted Nuts<br>";
                description += "- <strong>Base Notes:</strong> Vanilla dan Woody Notes";
            } else if (title.includes("HEJO AFE SEABLOOSOM")) {
                description = "HEJO AFE SEABLOOSOM menghadirkan aroma segar yang terinspirasi dari lautan, dengan kombinasi floral yang elegan.<br><br>";
                description += "<strong>Catatan Aroma:</strong><br>";
                description += "- <strong>Top Notes:</strong> Bergamot dan Green Apple<br>";
                description += "- <strong>Heart Notes:</strong> Lily, Jasmine, dan Marine Notes<br>";
                description += "- <strong>Base Notes:</strong> White Musk dan Sandalwood";
            } else if (title.includes("HEJO AFE VANILLA")) {
                description = "HEJO AFE VANILLA memiliki aroma manis dan lembut dengan kehangatan vanilla yang memberikan nuansa elegan serta nyaman untuk digunakan sehari-hari.<br><br>";
                description += "<strong>Catatan Aroma:</strong><br>";
                description += "- <strong>Top Notes:</strong> Madagascar Vanilla dan Coconut<br>";
                description += "- <strong>Heart Notes:</strong> Orchid dan Tonka Bean<br>";
                description += "- <strong>Base Notes:</strong> Sandalwood dan White Musk";
            } else if (title.includes("HEJO AFE MELON")) {
                description = "HEJO AFE MELON menghadirkan aroma buah melon yang segar dan juicy, memberikan kesan ringan, manis, serta menyegarkan sepanjang hari.<br><br>";
                description += "<strong>Catatan Aroma:</strong><br>";
                description += "- <strong>Top Notes:</strong> Melon dan Cucumber<br>";
                description += "- <strong>Heart Notes:</strong> Water Lily dan Jasmine<br>";
                description += "- <strong>Base Notes:</strong> Musk dan Amber";
            } else if (title.includes("ALEXANDRIA PREMIUM")) {
                description = `Alexandria adalah parfum mewah unisex yang dirancang untuk mereka yang menghargai keanggunan dan ketulusan dalam setiap langkah. Terinspirasi oleh keindahan dan sejarah kota legendaris Alexandria, parfum ini menawarkan keharuman yang lembut namun penuh karakter, cocok untuk pria dan wanita. Menggabungkan keanggunan klasik dengan sentuhan modern, Alexandria mencerminkan kepercayaan diri dan pesona yang tak tertandingi.<br><br>`;
                description += `<strong>Catatan Aroma:</strong><br>`;
                description += `- <strong>Top Notes:</strong> Bergamot, Mandarin, dan Blackcurrant<br>`;
                description += `- <strong>Heart Notes:</strong> Jasmine, Rose, dan Orange Blossom<br>`;
                description += `- <strong>Base Notes:</strong> Sandalwood, Vanilla, dan Amber`;
            } else if (title.includes("MAXIMUM ULTIMATE PREMIUM")) {
                description = 'Maximum Ultimate adalah parfum mewah yang di rancang khusus untuk pria modern yang ingin selalu tampil maksimal. Transpirasi dari kekuatan dan ketangguhan pria sejati. Parfum ini menghadirkan kombinasi aroma yang memikat dan memancarkan aura percaya diri.<br><br>';
                description += `<strong>Catatan Aroma:</strong><br>`;
                description += `- <strong>Top Notes:</strong> Citrus segar, Bergamot, dan Grapefruit<br>`;
                description += `- <strong>Heart Notes:</strong> Bunga Lavendra, Rpsemary, dan Cardamom<br>`;
                description += `- <strong>Base Notes:</strong> Cedarwood, Patchouli, dan Vetiver`;
            } else if (title.includes("MIA PREMIUM")) {
                description = "MIA PREMIUM adalah parfum eksklusif dengan wewangian premium yang memikat. Dikembangkan dengan paduan aroma floral, fruity, dan woody yang harmonis, parfum ini memberikan kesan elegan dan mewah. Cocok untuk segala suasana, MIA PREMIUM hadir dengan kemasan yang stylish dan tahan lama, membuat Anda tetap wangi dan percaya diri sepanjang hari. Pilihan sempurna untuk mereka yang menginginkan wewangian berkualitas tinggi dengan sentuhan modern.";
            }
        
            console.log("📜 Description:", description);
        
            document.getElementById("popupTitle").innerText = title;
            document.getElementById("popupImage").src = imageSrc;
            document.getElementById("popupTags").innerHTML = tags;
            document.getElementById("popupPrice").innerText = price;
        
            const descriptionElement = document.getElementById("popupDescription");
            if (descriptionElement) {
                descriptionElement.innerHTML = description;
            } else {
                console.error("❌ Elemen popupDescription tidak ditemukan!");
            }
        
            document.getElementById("productPopup").style.display = "flex";
        }
        
        function closePopup() {
            document.getElementById("productPopup").style.display = "none";
        }
        
        window.addEventListener("click", function(event) {
            const popup = document.getElementById("productPopup");
            if (event.target === popup) {
                closePopup();
            }
        });