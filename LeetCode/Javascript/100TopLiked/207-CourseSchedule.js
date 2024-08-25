/*
https://leetcode.com/problems/course-schedule/description/?envType=study-plan-v2&envId=top-100-liked
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Create an adjacency list to represent the course dependencies.
    const adjList = new Array(numCourses).fill(0).map(() => []);
    for (const [course, pre] of prerequisites) {
        adjList[pre].push(course);
    }

    // Create an array to track the indegree of each course.
    const indegree = new Array(numCourses).fill(0);
    for (const [course, pre] of prerequisites) {
        indegree[course]++;
    }

    // Create a queue to store courses with an indegree of 0.
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Initialize a counter to track the number of courses completed.
    let count = 0;

    // Perform a topological sort using the queue.
    while (queue.length > 0) {
        const course = queue.shift();
        count++;

        // Decrement the indegree of all courses that depend on the current course.
        for (const neighbor of adjList[course]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If all courses have been completed, return true. Otherwise, return false.
    return count === numCourses;
};