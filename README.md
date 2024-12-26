# Fantasy Football Divisional/Rivals Scheduler

Github Link: https://github.com/aksharans/PUBLIC_Fantasy-Football-Divisional-Rivals-Scheduler

NPM Node Package Link: https://www.npmjs.com/package/fantasy-football-divisional-rivals-scheduler

# Description
Generate a 14 week fantasy football schedule given 3 divisions with 4 teams each.

# Constraints/Rules (Constraint Satisfaction Problem)
- 12 total teams (4 teams in 3 divisions)
- 14 total games
    - each team has 1 rival they play week 1 & week 14 (+2)
    - each team plays 2 other teams twice as divisional oppenents in weeks 2/3 and weeks 12/13 (automatically enforces teams aren't playing the same team in a short span) (+4)
    - each team plays the remaining 8 teams once (+8)
- the schedule is valid (i.e. there are no conlicts for any teams for any weeks)

# Algorithm
Modified Constraint Solving utilizing propogation, backtracking, arc-consistency, and randomized decision making.

# Steps
***Note: will need access to source file ff_divisional_scheduler.py (private file)***
1. git clone https://github.com/aksharans/PUBLIC_Fantasy-Football-Divisional-Rivals-Scheduler.git
2. Request access to ff_divisional_scheduler.py
3. npm i fantasy-football-divisional-rivals-scheduler
4. Modify divisions.txt with the team names
5. `node create_schedule.js`
6. Schedule created in team_schedule.csv