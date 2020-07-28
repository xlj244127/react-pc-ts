import React, { useState, useEffect } from 'react';
import { useAction, withStore } from 'store/store';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import menuList from './routerConfig';
import Layout from '../commons/layout/layout';

import Login from 'page/login/login';
import NotFound from '../commons/notFound/notFound';

const AppRouter = () => {

  const action = useAction();
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("isLogin") === "true" ? true : false);

  useEffect(() => {
    let is = sessionStorage.getItem("isLogin") === "true" ? true : false;
    action.changeHasAuth(is);
    setIsLogin(is);
  }, [sessionStorage.getItem("isLogin")]);

  return (
    <BrowserRouter>
      <Switch>
        { !isLogin && <Route path="/login" exact component={Login} /> }
        {
          !isLogin && <Route path="*" exact render={() => <Redirect to="/login" />} />
        }
        {
          isLogin && <Switch>
            <Route path="/login" exact render={() => <Redirect to="/ant/echarts" />} />
            <Layout>
              <Switch>
                <Route path="/notFound" exact component={NotFound} />
                {
                  menuList.map((item, index) => (
                    <Route key={index} path={item.path} 
                      render={() => {
                        return <Switch>
                          {
                            item.subMenu.map((sub, key) => (
                              <Route key={key} path={sub.subPath} exact component={sub.component} />
                            ))
                          }
                          <Redirect to="/" />
                        </Switch>;
                      }}
                    />
                  ))
                }
              </Switch>
            </Layout>
          </Switch>
        }
      </Switch>
    </BrowserRouter>
  );
};

export default withStore(AppRouter);
