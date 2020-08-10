export const selectHeroItems = createSelector(
    [selectHero],
    (hero) =>hero.heroItems  
    
)
