import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const usePlatsStore = defineStore('plats', () => {
  // State
  const specialites = ref([])
  const menuDuJour = ref([])
  const menuItems = ref({})
  const panier = ref([])
  const informationsClient = ref({
    nom: '',
    telephone: '',
    notes: ''
  })
  const modeLivraison = ref('pickup')
  const adresseLivraison = ref('')
  
  // Getters
  const totalPanier = computed(() => {
    return panier.value.reduce((total, item) => total + (item.prix * item.quantite), 0)
  })
  
  const nombreArticlesPanier = computed(() => {
    return panier.value.reduce((total, item) => total + item.quantite, 0)
  })
  
  const fraisLivraison = computed(() => {
    return modeLivraison.value === 'delivery' ? 2.5 : 0
  })
  
  const totalAvecFrais = computed(() => {
    return totalPanier.value + fraisLivraison.value
  })
  
  // Actions
  const chargerDonnees = async () => {
    // Charger les spécialités
    specialites.value = [
      { id: 1, nom: "Penne pasta with meatball 1", prix: 5000, image: "/food-1.jpg", note: 4 },
      { id: 2, nom: "Penne pasta with meatball 2", prix: 5500, image: "/food-2.jpg", note: 5 },
      { id: 3, nom: "Croissant au beurre", prix: 2.5, image: "/pastry-2.jpg", note: 5 },
      { id: 4, nom: "Cappuccino", prix: 3.8, image: "/drink-3.jpg", note: 4 },
      { id: 5, nom: "Salade César", prix: 12.5, image: "/lunch-1.jpg", note: 4 }
    ]
    
    // Charger le menu du jour
    chargerMenuDuJour()
    
    // Charger les items du menu
    chargerMenuItems()
  }
  
  // Fonction spécifique pour charger le menu du jour
  const chargerMenuDuJour = async () => {
    menuDuJour.value = [
      { nom: "American Combo Menu", prix: 2000, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
      { nom: "Strawberry Jam French Toast", prix: 2000, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
      { nom: "Optic Big Breakfast Combo Menu", prix: 2000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ]
  }
  
  // Fonction spécifique pour charger les items du menu
  const chargerMenuItems = async () => {
    menuItems.value = {
      breakfast: [
        {
          id: 101,
          name: "Petit Déjeuner Classique",
          description: "Café, jus d'orange frais, viennoiserie au choix",
          price: 8.50,
          popular: true,
          image: "/breakfast-1.jpg",
          category: 'breakfast'
        },
        {
          id: 102,
          name: "Avocado Toast",
          description: "Pain complet, avocat, œuf poché, graines",
          price: 9.80,
          popular: false,
          image: "/breakfast-2.jpg",
          category: 'breakfast'
        },
        {
          id: 103,
          name: "Pancakes Maison",
          description: "Servis avec sirop d'érable et fruits de saison",
          price: 7.90,
          popular: true,
          image: "/breakfast-3.jpg",
          category: 'breakfast'
        },
        {
          id: 104,
          name: "Granola Bio",
          description: "Yaourt grec, fruits frais, miel",
          price: 6.50,
          popular: false,
          image: "/breakfast-4.jpg",
          category: 'breakfast'
        }
      ],
      drinks: [
        {
          id: 201,
          name: "Expresso",
          description: "Notre mélange signature",
          price: 3.20,
          popular: true,
          image: "/drink-1.jpg",
          category: 'drinks'
        },
        {
          id: 202,
          name: "Cappuccino",
          description: "Avec mousse de lait onctueuse",
          price: 4.50,
          popular: true,
          image: "/drink-2.jpg",
          category: 'drinks'
        },
        {
          id: 203,
          name: "Thé Signature",
          description: "Sélection de thés premium",
          price: 3.80,
          popular: false,
          image: "/drink-3.jpg",
          category: 'drinks'
        },
        {
          id: 204,
          name: "Smoothie Vert",
          description: "Épinard, pomme, gingembre, citron",
          price: 5.90,
          popular: false,
          image: "/drink-4.jpg",
          category: 'drinks'
        }
      ],
      lunch: [
        {
          id: 301,
          name: "Salade César",
          description: "Poulet grillé, parmesan, croûtons, sauce maison",
          price: 12.50,
          popular: true,
          image: "/lunch-1.jpg",
          category: 'lunch'
        },
        {
          id: 302,
          name: "Sandwich Club",
          description: "Poulet, bacon, avocat, pain aux céréales",
          price: 10.90,
          popular: false,
          image: "/lunch-2.jpg",
          category: 'lunch'
        },
        {
          id: 303,
          name: "Quiche du Jour",
          description: "Accompagnée de salade verte",
          price: 11.20,
          popular: true,
          image: "/lunch-3.jpg",
          category: 'lunch'
        },
        {
          id: 304,
          name: "Bowl Buddha",
          description: "Quinoa, légumes rôtis, avocat, sauce tahini",
          price: 13.50,
          popular: false,
          image: "/lunch-4.jpg",
          category: 'lunch'
        }
      ],
      pastries: [
        {
          id: 401,
          name: "Croissant Pur Beurre",
          description: "Fait maison quotidiennement",
          price: 2.80,
          popular: true,
          image: "/pastry-1.jpg",
          category: 'pastries'
        },
        {
          id: 402,
          name: "Pain au Chocolat",
          description: "Chocolat premium belge",
          price: 3.20,
          popular: true,
          image: "/pastry-2.jpg",
          category: 'pastries'
        },
        {
          id: 403,
          name: "Tarte Citron Meringuée",
          description: "Équilibrée entre acidité et douceur",
          price: 4.50,
          popular: false,
          image: "/pastry-3.jpg",
          category: 'pastries'
        },
        {
          id: 404,
          name: "Cookie Maison",
          description: "Pépites de chocolat et noix de pécan",
          price: 2.50,
          popular: false,
          image: "/pastry-4.jpg",
          category: 'pastries'
        }
      ]
    }
  }
  
  const ajouterAuPanier = (plat) => {
    const existingItem = panier.value.find(item => item.id === plat.id)
    
    if (existingItem) {
      existingItem.quantite += 1
    } else {
      panier.value.push({
        id: plat.id,
        nom: plat.name || plat.nom,
        prix: plat.price || plat.prix,
        image: plat.image,
        quantite: 1
      })
    }
  }
  
  const retirerDuPanier = (platId) => {
    const index = panier.value.findIndex(item => item.id === platId)
    if (index !== -1) {
      panier.value.splice(index, 1)
    }
  }
  
  const modifierQuantite = (platId, action) => {
    const item = panier.value.find(item => item.id === platId)
    if (item) {
      if (action === 'increase') {
        item.quantite += 1
      } else if (action === 'decrease' && item.quantite > 1) {
        item.quantite -= 1
      } else if (action === 'decrease' && item.quantite === 1) {
        retirerDuPanier(platId)
      }
    }
  }
  
  const viderPanier = () => {
    panier.value = []
  }
  
  const setModeLivraison = (mode) => {
    modeLivraison.value = mode
  }
  
  const setAdresseLivraison = (adresse) => {
    adresseLivraison.value = adresse
  }
  
  const setInformationsClient = (infos) => {
    informationsClient.value = { ...informationsClient.value, ...infos }
  }
  
  const passerCommande = async () => {
    const commande = {
      items: panier.value,
      modeLivraison: modeLivraison.value,
      adresseLivraison: adresseLivraison.value,
      informationsClient: informationsClient.value,
      total: totalAvecFrais.value,
      date: new Date().toISOString()
    }
    
    console.log('Commande passée:', commande)
    viderPanier()
    
    return commande
  }
  
  // Persistance des données
  const loadState = () => {
    const savedState = localStorage.getItem('platsStore')
    if (savedState) {
      const state = JSON.parse(savedState)
      panier.value = state.panier || []
      informationsClient.value = state.informationsClient || { nom: '', telephone: '', notes: '' }
      modeLivraison.value = state.modeLivraison || 'pickup'
      adresseLivraison.value = state.adresseLivraison || ''
    }
  }
  
  const saveState = () => {
    const state = {
      panier: panier.value,
      informationsClient: informationsClient.value,
      modeLivraison: modeLivraison.value,
      adresseLivraison: adresseLivraison.value
    }
    localStorage.setItem('platsStore', JSON.stringify(state))
  }
  
  // Initialisation
  loadState()
  
  watch(
    [panier, informationsClient, modeLivraison, adresseLivraison],
    () => {
      saveState()
    },
    { deep: true }
  )
  
  return {
    specialites,
    menuDuJour,
    menuItems,
    panier,
    informationsClient,
    modeLivraison,
    adresseLivraison,
    totalPanier,
    nombreArticlesPanier,
    fraisLivraison,
    totalAvecFrais,
    chargerDonnees,
    chargerMenuDuJour,
    chargerMenuItems,
    ajouterAuPanier,
    retirerDuPanier,
    modifierQuantite,
    viderPanier,
    setModeLivraison,
    setAdresseLivraison,
    setInformationsClient,
    passerCommande
  }
})