* Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

  * Run 5 times. Each time the function runs:
    * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
      * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
      * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
  * After the game has finished (been run 5 times):
    * If the score is positive, run `goodGame` for all of the players currently within the starters array.
    * If the score is negative, run `badGame` for all of the players currently within the starters array.
    * If the score is equal to zero, do nothing with the starters.
    * Give the user a message about if they won, and the status of their starters.
    * After printing the results, ask the user if they would like to play again.
      * Run `playGame` from the start once more if they do.
      * End the program if they don't.

* HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

* HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
