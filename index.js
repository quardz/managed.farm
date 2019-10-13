var items = ['fast_growing_trees', 'fruits_regular_income', 'veg_regular_income', 'other_crops', 'live_stocks'];

var years = {
  2:{
    interest_pa: 12, 
    bank_interest: 7.5,
    profit_share: 5, 
    agri_returns: { //Its per acer in given year.
      fast_growing_trees: { // Like Malai veembi,  paru maram etc, 1 time high return 
        est_return: 0, 
        land_percent: 25
      },
      fruits_regular_income: { // Less water and less work but regular income
        est_return: 0, 
        land_percent: 25
      },
      veg_regular_income: { // Needs  water and work but regular high income
        est_return: 20000, 
        land_percent: 25
      },
      other_crops: { // adhoc crops which depends on demand and session
        est_return: 10000, 
        land_percent: 25
      },      
      live_stocks: { // live stocks like chicken, goat, sheep, cow etc
        est_return: 20000, 
        land_percent: 100
      },       
    }  
  },
  3:{
    interest_pa: 12, 
    bank_interest: 7.5,    
    profit_share: 10, 
    agri_returns: {
      fast_growing_trees: { // Like Malai veembi,  paru maram etc, 1 time high return 
        est_return: 0, 
        land_percent: 25
      },
      fruits_regular_income: { // Less water and less work but regular income
        est_return: 0, 
        land_percent: 25
      },
      veg_regular_income: { // Needs  water and work but regular high income
        est_return: 30000, 
        land_percent: 25
      },
      other_crops: { // adhoc crops which depends on demand and session
        est_return: 15000, 
        land_percent: 25
      },      
      live_stocks: { // live stocks like chicken, goat, sheep, cow etc
        est_return: 30000, 
        land_percent: 100
      },       
    }  
  },
  4:{
    interest_pa: 12, 
    bank_interest: 7.5,    
    profit_share: 15, 
    agri_returns: {
      fast_growing_trees: { // Like Malai veembi,  paru maram etc, 1 time high return 
        est_return: 50000, 
        land_percent: 25
      },
      fruits_regular_income: { // Less water and less work but regular income
        est_return: 0, 
        land_percent: 25
      },
      veg_regular_income: { // Needs  water and work but regular high income
        est_return: 50000, 
        land_percent: 25
      },
      other_crops: { // adhoc crops which depends on demand and session
        est_return: 20000, 
        land_percent: 25
      },      
      live_stocks: { // live stocks like chicken, goat, sheep, cow etc
        est_return: 60000, 
        land_percent: 100
      },       
    }  
  },
  5:{
    interest_pa: 14, 
    bank_interest: 7.50,    
    profit_share: 20, 
    agri_returns: {
      fast_growing_trees: { // Like Malai veembi,  paru maram etc, 1 time high return 
        est_return: 150000, 
        land_percent: 25
      },
      fruits_regular_income: { // Less water and less work but regular income
        est_return: 25000, 
        land_percent: 25
      },
      veg_regular_income: { // Needs  water and work but regular high income
        est_return: 75000, 
        land_percent: 25
      },
      other_crops: { // adhoc crops which depends on demand and session
        est_return: 30000, 
        land_percent: 25
      },      
      live_stocks: { // live stocks like chicken, goat, sheep, cow etc
        est_return: 75000, 
        land_percent: 100
      },       
    }  
  },    
  7:{
    interest_pa: 16, 
    bank_interest: 7.95,    
    profit_share: 25, 
    agri_returns: {
      fast_growing_trees: { // Like Malai veembi,  paru maram etc, 1 time high return 
        est_return: 300000, 
        land_percent: 25
      },
      fruits_regular_income: { // Less water and less work but regular income
        est_return: 50000, 
        land_percent: 25
      },
      veg_regular_income: { // Needs  water and work but regular high income
        est_return: 100000, 
        land_percent: 25
      },
      other_crops: { // adhoc crops which depends on demand and session
        est_return: 50000, 
        land_percent: 25
      },      
      live_stocks: { // live stocks like chicken, goat, sheep, cow etc
        est_return: 100000, 
        land_percent: 100
      },       
    }  
  }  
};

var land_invest = {
  0.05: 60000,
  0.10: 100000,
  0.25: 200000,
  0.50: 375000,
  1: 700000,
  2: 1400000,
  3: 2100000,
  5: 3500000,    
};




