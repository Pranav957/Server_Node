/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include<bits/stdc++.h>
#include<stdio.h>
#include<string>
using namespace std;
  string longestCommonSubsequence(string text1, string text2,int m, int n,string str) {
         if(m==0 || n==0)
         {
             return str;
         }
         
         if(text1[m-1]==text2[n-1])
          {
             return longestCommonSubsequence(text1,text2,m-1,n-1,str+text1[m-1]);
          }
          
       string s1= longestCommonSubsequence(text1,text2,m-1,n,str);
        string s2=longestCommonSubsequence(text1,text2,m,n-1,str);
        if(s1.length()>s2.length())
           return s1;
        else 
           return s2;
    }
int main()
{
    std::cout<<"Hello World";
     string s1,s2;
     cin >>s1>>s2;
    string str= longestCommonSubsequence(s1,s2,s1.length(),s2.length(),"");
    reverse(str.begin(),str.end());
       cout<<str<<endl;
     
    return 0;
}
